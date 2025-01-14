import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { AdapterDayjs } from "@mui/x-date-pickers/As";
import dayjs from "dayjs";
import moment from "moment";
import React, { useEffect, useState } from "react";
import EventPackages from "./EventPackages";

const ClientEventItem = ({
  event,
  pcks,
  handleEventStatus,
  handleEventImageUpload,
  handleEventChange,
}) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [dateChecked, setDateChecked] = useState();
  const [date, setDate] = useState(moment(moment.now()));

  useEffect(() => {
    setDateChecked(event?.date ? true : false);
    setDate(moment(event?.date ?? moment.now()));
  }, [event]);

  const handleCheck = (e) => {
    setExpanded(event.status);
    handleEventStatus(e);
  };

  const handleAddCheckChange = () => {
    if (dateChecked) handleEventChange("date", date, "remove");
    else handleEventChange("date", date);
    setDateChecked(!dateChecked);
  };

  const handleDateChange = (d) => {
    setDate(d);
    handleEventChange("date", d);
  };

  const handleAccordionChange = (e) => {
    e.stopPropagation();
    // setExpanded(event.status)
  };

  return (
    <Grid container direction="column" style={{ width: "100%" }}>
      <Paper sx={{ borderRadius: 0 }}>
        <AccordionSummary
          onClick={handleAccordionChange}
          sx={{ bgcolor: "rgba(0, 0, 0, .03)" }}
        >
          <FormControlLabel
            label={event.name}
            control={<Checkbox checked={event.status} onChange={handleCheck} />}
          />
        </AccordionSummary>

        {event?.status && (
          <AccordionDetails>
            <Grid container sx={{ p: 2, pb: 0 }} direction="column">
              <Grid container direction="row" spacing={2} >
                <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                  <Grid container direction="column" spacing={1}>
                    <Grid container alignItems="center">
                      <Checkbox
                        checked={dateChecked}
                        onChange={handleAddCheckChange}
                        size="small"
                        color="secondary"
                      />
                      <Typography>{"Add " + event?.name + " Date"}</Typography>
                    </Grid>
                    {dateChecked && (
                      <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                          disablePast
                          slotProps={{ textField: { size: "small" } }}
                          value={date}
                          label={event?.name + " Date"}
                          onChange={handleDateChange}
                        />
                      </LocalizationProvider>
                    )}
                  </Grid>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                  <Grid container direction="column" spacing={1}>
                    <Grid container alignItems="center">
                      <Typography>
                        {event?.cover_photo ? "Update" : "Add"} Wedding Cover
                        Photo
                      </Typography>
                      <Checkbox
                        style={{ visibility: "hidden" }}
                        color="secondary"
                        size="small"
                      />
                    </Grid>
                    <Button
                      variant="outlined"
                      color={event?.cover_photo ? "primary" : "secondary"}
                      component="label"
                    >
                      {event?.cover_photo ? "Update" : "Upload"} Cover Photo
                      <input
                        type="file"
                        hidden
                        onChange={handleEventImageUpload}
                        accept=".png, .jpg, .jpeg"
                      />
                    </Button>
                    {event?.image && (
                      <FormHelperText style={{ color: "green" }}>
                        {event?.image?.name}
                      </FormHelperText>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              {event?.services?.length > 0 && (
                <Grid>
                  <Divider style={{ margin: "16px 0" }}>
                    <Chip
                      label="Package Services"
                      variant="outlined"
                      style={{
                        backgroundColor: theme.palette.secondary.main,
                        color: "#fff",
                      }}
                    />
                  </Divider>
                  <EventPackages event={event} handleEventChange={handleEventChange}/>
                </Grid>
              )}
            </Grid>
          </AccordionDetails>
        )}
      </Paper>
    </Grid>
  );
};

export default ClientEventItem;
