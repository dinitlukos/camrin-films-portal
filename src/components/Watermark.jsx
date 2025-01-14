import Grid from "@mui/material/Grid2";
import logo from "../assets/logo.png";
const Watermark = ({size}) => {
  return (
    <Grid
    container
    size={size}
      sx={{
        position: "absolute",
        // width: "100%",
        height: "100%",
        zIndex: 2,
        opacity: 0.5,
        backgroundImage: `url(${logo})`
      }}
    ></Grid>
  );
};

export default Watermark;
