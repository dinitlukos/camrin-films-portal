import {
  alpha,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import StarIcon from "@mui/icons-material/Star";
const Deliverables = ({ deliverables = [], color }) => {
  const theme = useTheme();
  return (
    <Grid container direction="column">
      <Divider style={{ margin: "12px 0" }}>
        <Chip
          label="Deliverables"
          variant="outlined"
          style={{ backgroundColor: color, color: "#fff" }}
        />
      </Divider>
      {deliverables.map((v, k) => (
        <Grid container direction="row" key={k}>
          <Grid
            padding={2}
            key={k}
            container
            direction="column"
            alignContent="center"
            justifyContent="center"
            style={{ backgroundColor: alpha(color, 0.3), textAlign: "center" }}
            size={{ xs: 12, md: 4 }}
          >
            <Typography>{v?.title}</Typography>
          </Grid>
          <Grid
            container
            direction="column"
            size={{ xs: 12, md: 8 }}
            style={{
              borderColor: alpha(color, 0.3),
              borderStyle: "solid",
              borderWidth: 1,
              paddingLeft:5,
            }}
          >
            <List>
              {(v?.items ?? []).map((cv, ck) => (
                <ListItem key={ck}  dense disablePadding disableGutters alignItems='flex-start'>
                  <ListItemIcon style={{ minWidth: "34px", marginTop:"6px" }} >
                    <StarIcon fontSize="12" color={alpha(color, 0.3)}/>
                  </ListItemIcon>
                  <ListItemText>{cv}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Deliverables;
