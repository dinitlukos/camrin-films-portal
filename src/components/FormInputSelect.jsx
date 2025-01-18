import { Controller } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import { Box, styled } from "@mui/system";
import { FormHelperText, MenuItem, Select, TextField } from "@mui/material";

export const FormInputSelect = ({
  name,
  control,
  label,
  inputRef,
  message,
  disabled,
  handleOnChange,
  size = "small",
  variant = "value",
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
            disabled={disabled}
            size={size}
            onChange={(e) => {
              onChange(e);
              if (handleOnChange) handleOnChange(e.target.value);
            }}
            label={label}
            placeholder={placeholder}
            error={!!error}
            value={value ?? ''}
            inputRef={inputRef}
          >
            {options.map((d) => (
              <MenuItem
                key={variant == "id" ? d?.id : d}
                value={variant == "id" ? d?.id : d}
              >
                {variant == "id" ? d?.label : d}
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
