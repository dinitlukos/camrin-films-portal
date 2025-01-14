import React, { useRef } from "react";
import Grid from "@mui/material/Grid2";
import homeBg from "../../assets/packages/bg.jpg";
import "./index.css";
import About from "./about/About";
import CustomTabs from "./CustomTabs";
import Gallery from "./gallary/Gallery";
import Packs from "./pack/Packs";
import LogoContainer from "../../components/LogoContainer";

const PackagePage = () => {
  const [value, setValue] = React.useState(0);
  const printRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "contain",
        padding: "5%",
        minHeight: "100vh",
      }}
      ref={printRef}
    >
      <LogoContainer />
      <CustomTabs value={value} handleChange={handleChange} />

      <div style={{ padding: "20px 0" }}>
        <div hidden={value !== 0}>
          <Packs printRef={printRef} />
        </div>
        <div hidden={value !== 1}>
          <Gallery />
        </div>
        <div hidden={value !== 2}>
          <About />
        </div>
      </div>
    </div>
  );
};

export default PackagePage;
