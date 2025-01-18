import {
  Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import _ from "lodash";
import React from "react";
import ClientEventItem from "./ClientEventItem";

const ClientEvents = ({ events,pcks, defPacks, setEvents, setRefresh }) => {
  const handleEventStatus = (i) => {
    {
      var o = events;
      if (o[i].status) o[i].image = null;
      o[i].status = !o[i].status;
      setEvents(o);
      setRefresh((refresh) => !refresh);
    }
  };

  const handleEventImageUpload = (e, i) => {
    {
      var o = events;
      o[i].image = e.target.files[0];
      setEvents(o);
      setRefresh((refresh) => !refresh);
    }
  };

  const handleEventChange = (i, field, value, operation = "add") => {
    var o = events;
    if (operation == "add") o[i][field] = value;
    if (operation == "remove") delete o[i][field];
    setEvents(o);
    setRefresh((refresh) => !refresh);
  };

  const getDefaultServices = (d, e) => {
    const o = {};
    _.forIn(d, (v, k) => {
      o[k] = v["events"][e] ?? [];
    });
    return o;
  };

  return (
    <Grid container style={{ width: "100%" }}>
      <Grid sx={{ mb: 2 }}>
        <Typography fontWeight="bold" color="primary">Events</Typography>
      </Grid>
      <Grid container>
        {events.map((v, k) => (
          <ClientEventItem
            event={v}
            pcks={pcks}
            defServices={getDefaultServices(defPacks, v?.id)}
            key={k}
            handleEventStatus={() => handleEventStatus(k)}
            handleEventImageUpload={(e) => handleEventImageUpload(e, k)}
            handleEventChange={(f, v, o) => handleEventChange(k, f, v, o)}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default ClientEvents;
