import React from "react";
import Grid from "@mui/material/Grid2";
import {
  alpha,
  Avatar,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  LocationOn,
  PeopleOutline,
  Event,
} from "@mui/icons-material";
import AvatarListItem from "../../../components/AvatarListItem";
import calendarImage from "../../../assets/stories/calendar.png";
import moment from "moment";

const ClientDetails = ({data}) => {
  const theme = useTheme();

  const wedDate = (d) => {
          setDate(d.toDate());
          moment(d.toDate()).diff(moment.now(), "days")
  }
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            spacing={2}
            style={{
              padding: 10,
              border: "1px solid",
              backgroundColor: "#fff",
              borderColor: alpha(theme.palette.secondary.light, 0.9),
              borderRadius: 10,
            }}
          >
            <Typography color={theme.palette.secondary.light}>
              Client Details
            </Typography>
          </Grid>
        </Grid>
        <Card style={{ marginTop: -20, paddingTop: 20 }}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PeopleOutline />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Bride & Groom</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Event />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Eve, Wedding, Engagement</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOn />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>{data?.wedding_location}</ListItemText>
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        alignContent="center"
        justifyItems="center"
      >
        <div className="calendar-container">
          <div
            className="calendar-date"
            style={{ backgroundImage: `url(${calendarImage})` }}
          >
            <div className="calendar-day">{moment(data?.wedding_date?.toDate()).format("DD")}</div>
            <div style={{color:'#000'}}>{moment(data?.wedding_date?.toDate()).format("MMM yyyy")}</div>
          </div>
        </div>
        <Typography variant="h5" className="name" align="center">
          {data?.groom_name?.split(" ")[0]} & {data?.bride_name?.split(" ")[0]}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }} style={{ height: "100%" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            spacing={2}
            style={{
              padding: 10,
              border: "1px solid",
              backgroundColor: "#fff",
              borderColor: alpha(theme.palette.secondary.light, 0.9),
              borderRadius: 10,
            }}
          >
            <Typography color={theme.palette.secondary.light}>
              Quotation Details
            </Typography>
          </Grid>
        </Grid>
        <Card style={{ marginTop: -20, paddingTop: 20 }}>
          <List>
            <AvatarListItem
              label="Quotation Date"
              value={moment(data?.wedding_date?.toDate()).format("Do MMM yyyy")}
              icon="clock"
            />
            <AvatarListItem
              label="Valid Upto"
              value={moment(data?.wedding_date?.toDate()).format("Do MMM yyyy")}
              icon="clock"
            />
            <AvatarListItem
              label="Quotation By"
              value="Camrin Films"
              icon="business"
            />
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ClientDetails;
