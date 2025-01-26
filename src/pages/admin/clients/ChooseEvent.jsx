import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import img2 from "assets/home/roal.jpg";
import { db } from "src/firebase";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
export default function ChooseEvent() {
  const [eventTypes, setEventTypes] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const navigation = useNavigate();

  const getEvents = async () => {
    const docSnap = await getDoc(doc(db, "Properties", "constants"));
    if (docSnap.exists()) {
      const d = docSnap.data();
      setEventTypes(d["eventTypes"] ?? []);
      setEvents(d["events"] ?? []);
    }
  };

  React.useEffect(() => {
    getEvents();
  }, []);

  const handleEventSelection = (v) => {
    navigation("/admin/client", { state: { eventId: v } });
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      direction="column"
      spacing={4}
      padding={4}
    >
      <Stack padding="32px 0">
        <Typography gutterBottom variant="h5" component="div">
          Pick the Event
        </Typography>
      </Stack>
      <Grid container spacing={4}>
        {eventTypes.map((v, k) => (
          <Grid size={{ xs: 12, lg: 3, md: 4, sm: 6 }}>
            <Box >
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={img2}
                  alt="green iguana"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5">
                    {v}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleEventSelection(v)}
                >
                  Choose
                </Button>
              </CardActions>
            </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
