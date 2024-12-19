import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid2";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import _ from "lodash";
import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { collection, doc, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import {
  Button,
  Chip,
  colors,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { AuthContext } from "../auth/AuthProvider";
import Loader from "./Loader";

const COL_KEYS = [
  "id",
  "bride_name",
  "groom_name",
  "wedding_date",
  "guest_contact",
  "events",
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  id,
  bride_name,
  groom_name,
  wedding_date,
  guest_contact,
  events
) {
  return { id, bride_name, groom_name, wedding_date, guest_contact, events };
}

export default function AdminHome() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logOut } = React.useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)

  const fetchStories = async () => {
    const docSnap = await getDocs(collection(db, "stories"));
    if (docSnap.docs.length > 0) {
      const data = _.map(docSnap?.docs, (v) => {
        return _.pick({ ...v.data(), id: v.id }, COL_KEYS);
      });
      setRows(data);
    } else {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleEdit = (d) => {
    navigate("/admin/client", { state: { id: d.id } });
  };
  const handleAddClient = () => {
    navigate("/admin/client");
  };

  const handleDelete = async (row) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "stories", row?.id));
      await fetchStories();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
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

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleModelClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Home
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} justifyContent="end">
        <Stack container spacing={3} paddingRight={6} paddingTop={4}>
          <Button variant="outlined" onClick={handleAddClient}>
            {" "}
            Add Client
          </Button>
        </Stack>
      </Grid>
      <Grid padding={3}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Groom Name</StyledTableCell>
                <StyledTableCell>Bride Name</StyledTableCell>
                <StyledTableCell>Wedding Date&nbsp;</StyledTableCell>
                <StyledTableCell>Guest Contact&nbsp;</StyledTableCell>
                <StyledTableCell>Events&nbsp;</StyledTableCell>
                <StyledTableCell>Actions&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.bride_name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.groom_name}
                  </StyledTableCell>
                  <StyledTableCell>{row.bride_name}</StyledTableCell>
                  <StyledTableCell>
                    {moment(row.wedding_date.toDate()).format("Do MMM yyyy")}
                  </StyledTableCell>
                  <StyledTableCell>{row.guest_contact}</StyledTableCell>
                  <StyledTableCell>
                    <Grid container spacing={1}>
                      {row.events.map((v, k) => (
                        <Chip
                          key={k}
                          label={v.name}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Grid>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack container direction="row" spacing={1}>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(row)}
                      >
                        <DeleteIcon color="error" />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleEdit(row)}
                      >
                        <EditIcon color="primary" />
                      </IconButton>
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Dialog
        open={open}
        onClose={handleModelClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to delete this client?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please note that once you delete the client, Client no further able to access
            the invitation and gallary screen, but gallary images will be keep in storage
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="info" onClick={handleModelClose}>Cancel</Button>
          <Button color="error" onClick={handleDelete} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {loading && <Loader />}
    </div>
  );
}
