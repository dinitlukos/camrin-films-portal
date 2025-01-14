import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import FormGrid from "../../components/FormGrid";
import { FormInputText } from "../../components/FormInputText";

const WeddingDetails = ({ control, register, eventDate, setEventDate }) => {
  return (
    <Grid marginBottom="12px">
      <Grid container spacing={3} marginBottom="12px">
        <Typography fontWeight="bold">Wedding Details</Typography>
      </Grid>
      <Grid container spacing={3}>
        <FormInputText
          name="guest_contact"
          control={control}
          label="Guest Contact Number"
          message="Invalid Phone Number"
          inputRef={{
            ...register("guest_contact", {
              required: true,
              pattern: `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`,
            }),
          }}
        />
        <FormInputText
          name="wedding_location"
          control={control}
          label="Wedding Location"
          placeholder="Auditorium or Church/Temple name"
          inputRef={{
            ...register("wedding_location", { required: true }),
          }}
        />
        <FormGrid size={{ xs: 12, md: 6 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disablePast
              label="Wedding Date"
              value={eventDate}
              onChange={(e) => setEventDate(e)}
            />
          </LocalizationProvider>
        </FormGrid>

        <FormInputText
          name="wedding_time"
          control={control}
          label="Wedding Time"
          size="medium"
          placeholder="11:05 am to 11.45 am / 10.00 am"
          inputRef={{ ...register("wedding_time", { required: true }) }}
        />
      </Grid>
      <Divider style={{ width: "100%" }} />
    </Grid>
  );
};

export default WeddingDetails;
