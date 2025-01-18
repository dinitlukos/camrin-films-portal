import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid2";
import { Box, styled } from "@mui/system";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
export const FormInputDate = ({ name, control, label, inputRef }) => {
  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));
  return (
    <FormGrid size={{ xs: 12, md: 6 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              // disablePast
              label={label}
              value={value}
              onChange={onChange}
            //   inputRef={inputRef}
            />
          )}
        />
      </LocalizationProvider>
    </FormGrid>
  );
};
