import React from "react";
import Grid from "@mui/material/Grid2";
import homeBg from "../../assets/packages/bg.jpg";
import circle from "../../assets/packages/cf_circle.png";
import logo from "../../assets/packages/cf_logo.png";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import About from "./about/About";
import CustomTabs from "./CustomTabs";
import Gallery from "./gallary/Gallery";
import Packs from "./pack/Packs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B82B3C",
      500: "rgba(184, 43, 60, .1)",
    },

    secondary: {
      main: "#723A7A",
    },
  },
});

const PackagePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "contain",
          padding: "5%",
          minHeight: "100vh",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <div>
            <img src={logo} alt="Camrin Films Logo" className="logo" />
            <div>
              <img src={circle} alt="Camrin Films Logo" className="spin-img" />
            </div>
          </div>
          <CustomTabs value={value} handleChange={handleChange}/>
        </Grid>
        <div style={{ padding: "20px 0" }}>
          <div hidden={value !== 0}>
            <About />
          </div>
          <div hidden={value !== 1}>
           <Packs/>
          </div>
          <div hidden={value !== 2}>
            <Gallery />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PackagePage;
