import React from "react";
import Grid from "@mui/material/Grid2";
import SocialMedia from "./SocialMedia";
import { Chip, Divider, Typography, useTheme } from "@mui/material";
import { Padding } from "@mui/icons-material";
import Locations from "./Locations";

const About = () => {
  const theme = useTheme()
  return (
    <Grid container direction="column" rowGap={2} columnGap={2}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        style={{
          background: "linear-gradient(180deg, #841042 0%, #CD3339 100%)",
          // height: "300px",
          borderRadius: 25,
          color: "#fff",
          padding: 50,
        }}
      >
        <Typography>
          Camrin Films is a new generation startup and customer satisfaction is
          one of our key metrics. Camrin is changing the way India gets married.
          Would you mind joining us to change the way wedding photography is
          done? Please make a call at +91 9745519554, if you need more details
          or visit our website, www.camrinfilms.com
        </Typography>
      </Grid>
      <Divider style={{ margin: "12px 0" }}>
        <Chip
          label="Locations"
          variant="outlined"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
          }}
        />
      </Divider>
      <Locations />
      <Divider style={{ margin: "12px 0" }}>
        <Chip
          label="Social Media"
          variant="outlined"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
          }}
        />
      </Divider>
      <SocialMedia />
    </Grid>
  );
};

export default About;
