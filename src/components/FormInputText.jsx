import { Controller } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import { Box, styled } from "@mui/system";
import { FormHelperText, TextField } from "@mui/material";

export const FormInputText = ({
  name,
  control,
  label,
  inputRef,
  message,
  size = "small",
  placeholder = "",
  rules={},
  containerSize = { xs: 12, md: 6 },
  type = "text",
  multiline = false,
  minRows=1
}) => {
  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <FormGrid size={containerSize}>
          <TextField
            helperText={error ? error.message : null}
            size={size}
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            type={type}
            placeholder={placeholder}
            variant="outlined"
            inputRef={inputRef}
            multiline={multiline}
            minRows={minRows}
          />
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
