import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useState } from "react";

const Locations = () => {
  const theme = useTheme();
  const loc = [
    {
      direction: { lat: 10.0889055, lng: 76.3391836 },
      place: "Cochin",
      address:
        "Metro Pillar No 106, Companypadi, Choornikkara, Aluva, Kerala 683106, India",
    },
    {
      direction: { lat: 24.4571007, lng: 54.3721664 },
      place: "UAE",
      address:
        "Camrin Films, Building 02, 2 Yalyam Street, Al Nahyan, W15 01 - Abu Dhabi - UAE",
    },
    {
      direction: { lat: 47.73855, lng: 11.5749774 },
      place: "Ireland",
      address:
        "Camrin Films, 46 The Park Brooms Court Charleville co. Cork, Ireland, P56 TX60",
    },
  ];
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_APIS_CREDS}>
      <Grid container direction="row" spacing={4}>
        {loc.map((v, k) => (
          <Grid key={k} size={{ xs: 12, md: 4 }}>
            <Card
              style={{
                boxShadow:
                  "2px 1px 1px rgba(184, 43, 60, .2),0px 1px 1px 0px rgba(184, 43, 60, .14),0px 1px 3px 0px rgba(184, 43, 60, 1)",
              }}
            >
              <CardMedia>
                <Map
                  style={{ width: "100%", height: "200px" }}
                  defaultZoom={13}
                  defaultCenter={v?.direction}
                  gestureHandling={"greedy"}
                  disableDefaultUI
                >
                  <Marker position={v?.direction} />
                </Map>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {v?.place}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {v?.address}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </APIProvider>
  );
};

export default Locations;
