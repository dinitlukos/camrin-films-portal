import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/system';
import { Controller } from 'react-hook-form';

export const FormInputRadioGroup = ({
  name,
  control,
  label,
  inputRef,
  message = '',
  size = 'small',
  rules = {},
  containerSize = { xs: 12, md: 6 },
}) => {
  const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
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
          <FormControl>
            <Typography color="primary">Package Type</Typography>
            <Controller
              name={name}
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
              }) => (
                <RadioGroup row value={value} onChange={onChange}>
                  <FormControlLabel
                    sx={{ color: '#000' }}
                    value="Bride and Groom"
                    control={<Radio />}
                    label="Bride and Groom"
                  />
                  <FormControlLabel
                    sx={{ color: '#000' }}
                    value="Single Side"
                    control={<Radio />}
                    label="Single Side"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
          {error && (
            <FormHelperText error style={{ marginLeft: 10 }}>
              {message ? message : label} {message ? '' : 'is required'}
            </FormHelperText>
          )}
        </FormGrid>
      )}
    />
  );
};
