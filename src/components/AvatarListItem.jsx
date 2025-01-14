import {
  alpha,
  Avatar,
  Icon,
  ListItem,
  ListItemAvatar,
  Typography,
  useTheme,
} from "@mui/material";
import {
  LocationOn,
  PeopleOutline,
  Event,
  LockClock,
  Business,
} from "@mui/icons-material";

import Grid from "@mui/material/Grid2";

const AvatarListItem = ({ label, value, icon, variant = "secondary" }) => {
  const theme = useTheme();
  const iconStyle = {
    height: { xs: ".8em", md: "1em" },
    width: { xs: ".8em", md: "1em" },
  };

  const getIcon = (name) => {
    const icons = {
      business: <Business sx={iconStyle} />,
      location: <LocationOn sx={iconStyle} />,
      people: <PeopleOutline sx={iconStyle} />,
      event: <Event sx={iconStyle} />,
      clock: <LockClock sx={iconStyle} />,
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
            bgcolor: alpha(theme.palette[variant].main, 0.2),
            color: alpha(theme.palette[variant].main, 0.9),
          }}
        >
          {getIcon(icon)}
        </Avatar>
      </ListItemAvatar>
      <Grid container direction="row" spacing={2} style={{ width: "100%" }}>
        <Grid size={{ xs: value ? 6 : 12 }}>
          <Typography> {label}</Typography>
        </Grid>
        {value && <Grid size={{ xs: 6 }}>
          <Typography> {value}</Typography>
        </Grid>}
      </Grid>
    </ListItem>
  );
};

export default AvatarListItem;
