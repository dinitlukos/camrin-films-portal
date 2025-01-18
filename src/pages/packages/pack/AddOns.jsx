import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AddOnTile from "../../../components/AddOnTile";
import { addons } from "../../../constants/addons";

const AddOns = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid container flexDirection="row" alignItems="center" spacing={0}>
        <Grid
          style={{
            width: "5px",
            height: "100%",
            backgroundColor: theme.palette.secondary.main,
            marginRight: "2px",
          }}
        />
        <Grid
          style={{
            backgroundColor: theme.palette.secondary.main,
            textAlign: "center",
            padding: "5px 20px 5px 20px",
            minWidth: "200px",
          }}
        >
          <Typography color="#fff" fontWeight="bold">
            Addons
          </Typography>
        </Grid>
        <Grid
          style={{
            width: "5px",
            height: "100%",
            backgroundColor: theme.palette.secondary.main,
            marginLeft: "2px",
          }}
        />
      </Grid>

      <Grid container flexDirection="row" spacing={2}>
        {addons.map((v, k) => (
          <AddOnTile addOn={v} key={k} />
        ))}
      </Grid>
    </Grid>
  );
};

export default AddOns;
