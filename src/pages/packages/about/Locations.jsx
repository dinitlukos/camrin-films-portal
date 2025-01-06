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
        "Metro Pillar No, Camrin Films, 106, Companypadi, Choornikkara, Aluva, Kerala 683106, India",
    },
    {
      direction: { lat: 10.0889055, lng: 76.3391836 },
      place: "Banglore",
      address:
        "Metro Pillar No, Camrin Films, 106, Companypadi, Choornikkara, Aluva, Kerala 683106, India",
    },
    {
      direction: { lat: 10.0889055, lng: 76.3391836 },
      place: "Ireland",
      address:
        "Metro Pillar No, Camrin Films, 106, Companypadi, Choornikkara, Aluva, Kerala 683106, India",
    },
  ];
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_APIS_CREDS}>
      <Grid container direction="row" spacing={4}>
        {loc.map((v, k) => (
          <Grid size={{ xs: 12, md: 4 }}>
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
