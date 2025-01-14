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
import { LocationOn, PeopleOutline, Event } from "@mui/icons-material";
import AvatarListItem from "../../../components/AvatarListItem";
import moment from "moment";
import _ from "lodash";
import spiral from "../../../assets/packages/spiral.svg";
import spiralSecondary from "../../../assets/packages/spiral_secondary.svg";
import calendarImage from "../../../assets/calendar_primary.png";

import DateSlider from "./DateSlider";

const ClientDetails = ({ data }) => {
  const theme = useTheme();
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 4 }} order={{ xs:2, sm: 2, md: 1 }}>
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
          <Grid container alignItems="flex-end" direction="column">
            <img
              src={spiralSecondary}
              height="150px"
              weight="150px"
              style={{ position: "absolute", marginTop: -20 }}
            />
          </Grid>
          <List>
            <AvatarListItem label={data?.package_type ??"Bride & Groom"} icon="people" />
            <AvatarListItem
              label={_.map(data?.events, "name").join(", ")}
              icon="event"
            />
            <AvatarListItem label={data?.wedding_location} icon="location" />
          </List>
        </Card>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        order={{xs:1,  sm: 1, md: 2 }}
        alignContent="center"
        justifyItems="center"
      >
        <div
          className="calendar-date"
          style={{
            backgroundImage: `url(${calendarImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="calendar-title">WEDDING</div>
          <div className="pack-calendar-day">
            {moment(data?.wedding_date?.toDate()).format("DD")}
          </div>
          <div style={{ color: "#000", fontSize: ".8rem" }}>
            {moment(data?.wedding_date?.toDate()).format("MMM yyyy")}
          </div>
        </div>
        {/* <DateSlider data={data}/> */}

        <Typography variant="h5" className="name" align="center">
          {data?.groom_name?.split(" ")[0]} & {data?.bride_name?.split(" ")[0]}
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        order={{ sm: 3, md: 3 }}
        sx={{ height: "100%", display: { xs: "none", sm: "block" } }}
      >
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
              borderColor: alpha(theme.palette.primary.light, 0.9),
              borderRadius: 10,
            }}
          >
            <Typography color={theme.palette.primary.light}>
              Quotation Details
            </Typography>
          </Grid>
        </Grid>
        <Card style={{ marginTop: -20, paddingTop: 20 }}>
          <Grid container alignItems="flex-end" direction="column">
            <img
              src={spiral}
              height="150px"
              weight="150px"
              style={{ position: "absolute", marginTop: -20 }}
            />
          </Grid>
          <List>
            <AvatarListItem
              label="Quotation Date"
              value={moment(data?.packages?.quotation?.date.toDate()).format(
                "Do MMM yyyy"
              )}
              icon="clock"
              variant="primary"
            />
            <AvatarListItem
              label="Valid Upto"
              value={moment(
                data?.packages?.quotation?.validity.toDate()
              ).format("Do MMM yyyy")}
              icon="clock"
              variant="primary"
            />
            <AvatarListItem
              label="Quotation By"
              value="Camrin Films"
              icon="business"
              variant="primary"
            />
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ClientDetails;
