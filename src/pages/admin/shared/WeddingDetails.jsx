import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import FormGrid from "components/FormGrid";
import { FormInputText } from "components/FormInputText";
import { FormInputPhone } from "components/FormInputPhone";
import 'react-phone-input-2/lib/material.css'

const WeddingDetails = ({ control, register, eventDate, setEventDate }) => {
  return (
    <Grid marginBottom="12px">
      <Grid container spacing={3} marginBottom="24px">
        <Typography fontWeight="bold" color="primary">
          Wedding Details
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {/* <FormInputText
          name="customer_contact"
          control={control}
          label="Contact Number"
          message="Either a valid Phone number or Email is required"
          rules={{
            validate: (value, formValue) => {
              if (value) {
                return !!value.match(
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g
                );
              } else if (formValue.customer_email) {
                return true;
              } else {
                return false;
              }
            },
          }}
          inputRef={{
            ...register("customer_contact"),
          }}
        /> */}
        <FormInputPhone
          name="customer_contact"
          control={control}
          label="Contact Number"
          message="Either a valid Phone number or Email is required"
          rules={{
            validate: (value, formValue) => {
              if (value) {
                return !!value.match(
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/g
                );
              } else if (formValue.customer_email) {
                return true;
              } else {
                return false;
              }
            },
          }}
          inputRef={{
            ...register("customer_contact"),
          }}
        />
        <FormInputText
          name="customer_email"
          control={control}
          label="Email"
          rules={{
            validate: (value, formValue) => {
              if (value) {
                return !!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
              } else if (formValue.customer_contact) {
                return true;
              } else {
                return false;
              }
            },
          }}
          message="Either a valid Phone number or Email is required"
          inputRef={{
            ...register("customer_email"),
          }}
        />
        <FormInputText
          name="wedding_location"
          containerSize={{ xs: 12, md: 4 }}
          control={control}
          label="Wedding Location"
          placeholder="Auditorium or Church/Temple name"
          inputRef={{
            ...register("wedding_location"),
          }}
        />
        <FormGrid size={{ xs: 12, md: 4 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              // disablePast
              label="Wedding Date"
              slotProps={{ textField: { size: "small" } }}
              value={eventDate}
              onChange={(e) => setEventDate(e)}
            />
          </LocalizationProvider>
        </FormGrid>

        <FormInputText
          name="wedding_time"
          containerSize={{ xs: 12, md: 4 }}
          control={control}
          label="Wedding Time"
          size="small"
          placeholder="11:05 am to 11.45 am / 10.00 am"
          inputRef={{ ...register("wedding_time") }}
        />
      </Grid>
    </Grid>
  );
};

export default WeddingDetails;
