import {
  Avatar,
  Icon,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import {
  LocationOn,
  PeopleOutline,
  Event,
  LockClock,
  Business,
} from "@mui/icons-material";

import Grid from "@mui/material/Grid2";

const AvatarListItem = ({ label, value, icon }) => {
  const getIcon = (name) => {
    const icons = {
      business: (
        <Business
          sx={{
            height: { xs: ".8em", md: "1em" },
            width: { xs: ".8em", md: "1em" },
          }}
        />
      ),
      location: (
        <LocationOn
          sx={{
            height: { xs: ".8em", md: "1em" },
            width: { xs: ".8em", md: "1em" },
          }}
        />
      ),
      people: (
        <PeopleOutline
          sx={{
            height: { xs: ".8em", md: "1em" },
            width: { xs: ".8em", md: "1em" },
          }}
        />
      ),
      event: (
        <Event
          sx={{
            height: { xs: ".8em", md: "1em" },
            width: { xs: ".8em", md: "1em" },
          }}
        />
      ),
      clock: (
        <LockClock
          sx={{
            height: { xs: ".8em", md: "1em" },
            width: { xs: ".8em", md: "1em" },
          }}
        />
      ),
    };
    return icons[name];
  };
  
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          sx={{
            height: { xs: "30px", md: "40px" },
            width: { xs: "30px", md: "40px" },
          }}
        >
          {getIcon(icon)}
        </Avatar>
      </ListItemAvatar>
      <Grid container direction="row" spacing={2} style={{ width: "100%" }}>
        <Grid size={{ xs: 6 }}>
          <Typography> {label}</Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography> {value}</Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default AvatarListItem;
