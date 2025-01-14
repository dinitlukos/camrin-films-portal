import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import logo from "../assets/logo.png";
import whatsappimage from "../assets/whatsapp.webp";
import img1 from "../assets/home/wedding4.png";
import img2 from "../assets/home/roal.jpg";
import homeBg from "../assets/home/home-bg.webp";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTumblr,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

import {
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Paper,
  Typography,
  Box,
  Icon,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const HomePage = () => {
  const stories = [
    { id: "huma-vuzd", title: "Story of Huma Vuzd" },
    { id: "another-story", title: "Another Story" },
  ];
  useEffect(() => {
    camrinTitle();
  }, []);

  const camrinTitle = () => {
    const title = "CAMRIN FILMS";
    var formatted_title = [];
    for (let i = 0; i < title.length; i++) {
      formatted_title.push(
        <span key={i} className="camrin-title">
          {title[i]}
        </span>
      );
    }
    return formatted_title;
  };

  const getIcons = () => {
    const ic = [
      { url:"https://www.facebook.com/camrinfilms",icon: <FaFacebook className="social-icon" /> },
      { url:"https://twitter.com/camrin_films?lang=en",icon: <FaTwitter className="social-icon" /> },
      { url:"https://www.youtube.com/channel/UCwHxZxlO4ku6L_Ht97ti-JQ",icon: <FaYoutube className="social-icon" /> },
      { url:"https://camrinfilms.tumblr.com",icon: <FaTumblr className="social-icon" /> },
      { url:"https://in.pinterest.com/camrinfilms",icon: <FaPinterest className="social-icon" /> },
      { url:"https://www.instagram.com/camrinfilms",icon: <FaInstagram className="social-icon" /> },
    ];
    let formatted_icons = [];
    for (let i = 0; i < ic.length; i++) {
      formatted_icons.push(
        <span key={i} style={{ padding: "2px"}}>
          <a href={ic[i].url} target="_blank">{ic[i].icon}</a>
        </span>
      );
    }
    return formatted_icons;
  };

  return (
    <div className="homepage">
      <div style={{ backgroundImage: `url(${homeBg})`, padding: "2rem" }}>
        <div>{camrinTitle()}</div>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            padding="0 15%"
            textAlign="justify"
            fontSize="1rem"
          >
            As producers of some of the finest wedding photography in India, we
            are there to fulfill a standard, not a time frame. We attend your
            wedding with one mission: To immortalize the most beautiful memories
            of you on the day you deserve most, and that cannot be achieved by
            simply clicking a shutter all day. Our craft is about having an eye
            for beauty; choosing the most beautiful light, excavating beauty in
            locations, and capturing the beauty in the moments as they unfold.
            Once we understand this, we are able to produce family heirlooms
            that are appreciated for their beauty and emotional power. Our
            results speak for themselves. We suit couples who are after natural
            looking, colorful, vibrant and beautiful photography.
          </Typography>
        </Box>
        <Box padding="48px 0">{getIcons()}</Box>
      </div>
      <Grid2 container spacing={2} padding="2rem">
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
          <Card sx={{ display: "flex" }}>
            <Grid container>
              <Grid size={6}>
                <CardMedia
                  component="img"
                  image={img1}
                  alt="Live from space album cover"
                />
              </Grid>
              <Grid size={6}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      padding="12px 0"
                      align="center"
                      fontWeight="bold"
                      color="#5a67d8"
                      component="div"
                      variant="h6"
                    >
                      Wedding Photography
                    </Typography>
                    <Typography
                      padding="12px 0"
                      align="center"
                      fontWeight="bold"
                      component="div"
                      variant="h5"
                    >
                      Camrin Films Wedding Photography kerala
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      fontSize="1rem"
                      sx={{ color: "text.secondary" }}
                    >
                      Camrin Films is one of the most sought-after names for
                      wedding photography in Kerala. Comprising a great team of
                      wedding photographers and videographers, this company aims
                      high when it comes to delivering professional services and
                      customised wedding packages.
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid2>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
          <Card sx={{ display: "flex" }}>
            <Grid container>
              <Grid size={6}>
                <CardMedia
                  component="img"
                  image={img2}
                  alt="Live from space album cover"
                />
              </Grid>
              <Grid size={6}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      padding="12px 0"
                      align="center"
                      fontWeight="bold"
                      color="#5a67d8"
                      component="div"
                      variant="h6"
                    >
                      Event Planing
                    </Typography>
                    <Typography
                      padding="12px 0"
                      align="center"
                      fontWeight="bold"
                      component="div"
                      variant="h5"
                    >
                      Camrin Latest Wedding
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      fontSize="1rem"
                      sx={{ color: "text.secondary" }}
                    >
                      Planning for your big fat day? Planning is always half
                      done. So right from the beginning, we can help you. From
                      planning out to executing your wedding with amazing ideas
                      and the latest trends. We Camrin Films associate with top
                      event planners throughout South India and can assist you
                      with all your wedding needs.
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid2>
      <div className="whatsapp-container">
        <a href="https://wa.me/919446288811" target="_blank">
          <img src={whatsappimage} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
