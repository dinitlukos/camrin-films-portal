import React from "react";
import Grid from "@mui/material/Grid2";
import SocialMedia from "./SocialMedia";
import Spiral from "assets/packages/spiral.svg"
import {
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { BorderClear, BorderColor, BorderStyle, Padding } from "@mui/icons-material";
import Locations from "./Locations";

const About = () => {
  const theme = useTheme();

  const features = [
    {
      title: "Creative Excellence",
      description:
        "Our style is a blend of contemporary storytelling and timeless artistry. Every frame is carefully crafted to reflect your emotions and unique journey.",
    },
    {
      title: "Personalized Approach",
      description:
        "We believe every love story is different, and we take pride in capturing it in a way that’s true to you. From vibrant candid moments to elegant portraits, we create visuals that speak your story.",
    },
    {
      title: "Global Presence",
      description:
        "With offices in Ernakulam, Kerala, Abu Dhabi, UAE, and Limerick, Ireland, we seamlessly cater to diverse cultures and destinations.",
    },
    {
      title: "Unmatched Delivery Speed",
      description:
        "Understanding the excitement of reliving your special day, we ensure quick delivery without compromising on quality, so you can cherish your memories sooner.",
    },
    {
      title: "Comprehensive Services",
      description:
        "From pre-wedding shoots and cinematic teasers to full-length wedding films and curated albums, we offer a complete package tailored to your needs.",
    },
  ];
  return (
    <Grid container direction="column" rowGap={2} columnGap={2}>
        <Grid direction="column" container alignItems="flex-end">
        <img src={Spiral} height="150px" weight="150px" style={{position:'absolute'}}/>

      <Grid
        container
        direction="column"
        padding={4}
        style={{
          // background: "linear-gradient(180deg, #841042 0%, #CD3339 100%)",
          background:"#fff",
          borderColor:" #841042",
          borderRadius: 25,
          border:"1px solid",
          color: "#000"
        }}
      >
        <Typography fontWeight="bold" color={theme.palette.primary.main} sx={{pt:2,pb:2}} variant="h6" textAlign="center">
          Camrin Films – Capturing Dreams, Creating Memories
        </Typography>
        <Typography>
          Founded in 2014, Camrin Films Pvt. Ltd. is a trusted name in wedding
          and event cinematography, with over 5,000 weddings beautifully
          documented worldwide. With a passionate team of creatives and
          cutting-edge technology, we are dedicated to transforming your special
          moments into cinematic treasures.
        </Typography>
        <Typography fontWeight="bold" color={theme.palette.primary.main} sx={{pt:2,pb:2}}>Why Choose Camrin Films?</Typography>
        <List>
          {features.map((v, k) => (
            <ListItem disablePadding key={k}>
              <ListItemText>
              <Typography fontWeight="bold" variant="span">
                {v.title}:&nbsp;
              </Typography>
                {v.description}
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Typography>
          At Camrin Films, we don’t just capture moments – we create memories
          that last a lifetime. Let us help you preserve your most cherished
          days with creativity, passion, and perfection.
        </Typography>
      </Grid>
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
