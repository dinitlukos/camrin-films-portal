import Grid from '@mui/material/Grid2';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from 'src/auth/AuthProvider';
import CFAppBar from 'components/CFAppBar';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import notesBg from 'assets/notes_doodle.jpg';
import {
  alpha,
  Button,
  Card,
  CardContent,
  CardHeader,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { getNotes, setNote } from './NoteService';

const AdminClientNotes = () => {
  const { logOut, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const appBarRef = useRef(null);

  const defaultNote = {
    // title: "",
    date: new Date(),
    type: 'text',
    content: '',
  };

  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(defaultNote);

  const fetchNotes = async () => {
    try {
      const d = await getNotes(location.state?.id);
      setNotes(d ?? []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (location.state?.id) {
      fetchNotes();
      // updateUserProfile("Camrin Admin")
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prevNote) => {
      return {
        ...newNote,
        sender: user?.displayName ?? user?.email ?? 'Unknown',
        content: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newNote.content && location.state?.id) {
      await setNote(location.state?.id, newNote);
    }
    await fetchNotes();
    setNewNote(defaultNote);
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logOut();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div>
      <CFAppBar
        title="Client Notes"
        appBarRef={appBarRef}
        handleLogout={handleLogout}
      />
      <Grid container spacing={4}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          size={{ xs: 12, md: 6 }}
          sx={{ p: 4 }}
        >
          <Grid>
            <Typography>
              Date: {moment(newNote.date).format('Do MMM yyyy')}
            </Typography>
            <Typography>
              User: {user?.displayName ?? user?.email ?? 'Unknown'}
            </Typography>
          </Grid>
          <TextField
            multiline
            maxRows={10}
            minRows={10}
            fullWidth
            value={newNote.content}
            onChange={handleChange}
          />
          <Grid
            container
            sx={{ width: '100%' }}
            direction="row"
            justifyContent="center"
          >
            <Button color="secondary">Clear</Button>
            <Button variant="contained" onClick={handleSubmit}>
              Save
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          sx={{
            height: `calc(100vh - ${appBarRef.current?.offsetHeight ?? 64}px)`,
            background: `url(${notesBg})`,
            overflow: 'auto',
          }}
          size={{ xs: 12, md: 6 }}
        >
          <Grid
            // container
            // direction="row"
            sx={{
              backgroundColor: alpha('#000', 0.8),
              //   overflow: 'scroll',
              p: 4,
              width: '100%',
            }}
          >
            {notes.map((v, k) => (
              <Grid key={k} size={{ xs: 12 }} sx={{ p: 1 }}>
                <Paper sx={{ backgroundColor: '#d0d0d0' }}>
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={4}
                    >
                      <Typography variant="body2" color="info">
                        {v?.sender ?? 'Unknown'}
                      </Typography>
                      <Typography color="textSecondary" variant="body3">
                        {moment(v.date?.toDate()).format('Do MMM yyyy hh:mm A')}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography>{v?.content}</Typography>
                    </Grid>
                  </CardContent>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminClientNotes;
