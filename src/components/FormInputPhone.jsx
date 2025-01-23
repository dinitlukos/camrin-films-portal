import { Controller } from 'react-hook-form';
import Grid from '@mui/material/Grid2';
import { Box, styled } from '@mui/system';
import { FormHelperText, TextField, useTheme } from '@mui/material';
import PhoneInput from 'react-phone-input-2';

export const FormInputPhone = ({
  name,
  control,
  label,
  inputRef,
  message,
  size = 'small',
  placeholder = '',
  rules = {},
  containerSize = { xs: 12, md: 6 },
  type = 'text',
}) => {
  const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
  }));
  const theme = useTheme();
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
          <PhoneInput
            value={value}
            onChange={onChange}
            country="in"
            containerStyle={{
              with: '100%',
              height: '40px',
              color: theme.palette.text.secondary,
            }}
            specialLabel='Phone Number'
            inputStyle={{
              width: '100%',
              height: '40px',
              color: theme.palette.text.primary,
            }}
          />
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
