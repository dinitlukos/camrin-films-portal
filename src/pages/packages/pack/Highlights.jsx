import Grid from "@mui/material/Grid2";
import circle from "assets/packages/cf_circle_primary.png";

import { alpha, Typography, useTheme } from "@mui/material";
import { Wave } from "react-animated-text";
import { heighlights } from "constants/highlights";

const Highlights = () => {
  const theme = useTheme();
  return (
    <Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            zIndex: 1,
            position: "absolute",
            display: { xs: "none", md: "flex" },
          }}
          size={{ xs: 12 }}
        >
          <Grid
            container
            sx={{
              background: "#fff",
              p: 1,
              // mt: 2,
              height: "80px",
              width: "80px",
              borderRadius: "40px",
              fontSize: "1.2em",
              color: theme.palette.primary.main,
            }}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{ height: "100%" }}
            >
              <img
                src={circle}
                alt="Camrin Films Logo"
                style={{height: "60px"}}
                className="highlight-spin-img"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {heighlights.map((v, k) => (
            <Grid
              container
              key={k}
              style={{ border: `10px solid ${alpha(theme.palette[v?.color ?? "primary"]["main"],.2)}` }}
              size={{ sm: 12, md: 6 }}
              spacing={2}
            >
              <Grid
                container
                size={{ sm: 12, md: 6 }}
                order={{ xs: 2, md: k % 2 == 0 ? 1 : 2 }}
                sx={{
                  p: 1,
                  height: "250px",
                  overflow: "auto",
                }}
              >
                <Typography color="textPrimary">
                  {v?.description}
                  </Typography>
                  {v?.details.split("\n").map((cv, ck) => (
                    <Typography color="textPrimary" key={ck}>{cv}
                </Typography>

                  ))}
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="flex-end"
                size={{ sm: 12, md: 6 }}
                order={{ xs: 1, md: k % 2 == 0 ? 2 : 1 }}
                sx={{
                  background: `url(${v?.image})`,
                  backgroundSize: "cover",
                  height: "250px",
                  width: "100%",
                }}
              >
                <Grid
                  container
                  justifyContent="center"
                  sx={{
                    background: alpha(
                      theme.palette[v?.color ?? "primary"]["main"],
                      0.9
                    ),
                    width: "100%",
                    p: 1,
                    color: "#fff",
                  }}
                >
                  <Wave text={v?.title} speed={3} />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Highlights;
