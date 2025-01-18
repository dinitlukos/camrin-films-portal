import { Controller } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import { Box, styled } from "@mui/system";
import { FormHelperText, MenuItem, Select, TextField } from "@mui/material";

export const FormInputMultiSelect = ({
  name,
  control,
  label,
  disabled=false,
  inputRef,
  message,
  size = "small",
  placeholder = "",
  options = [],
  containerSize = { xs: 12, md: 6 },
}) => {
  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <FormGrid size={containerSize}>
          <TextField
            select
            size={size}
            disabled={disabled}
            onChange={onChange}
            label={label}
            placeholder={placeholder}
            error={!!error}
            value={value ?? []}
            inputRef={inputRef}
            slotProps={{
              select:{ multiple:true}
            }}
          >
            {options.map((d) => (
              <MenuItem key={d} value={d}>
                {d}
              </MenuItem>
            ))}
          </TextField>
          {error && (
            <FormHelperText error style={{ marginLeft: 10 }}>
              {message ? message : label} {message ? "" : "is required"}
            </FormHelperText>
          )}
        </FormGrid>
      )}
    />
  );
};
