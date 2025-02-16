import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { FormInputText } from 'components/FormInputText';
import { FormInputSelect } from 'components/FormInputSelect';
import { locations } from 'constants/locations';
import { communities } from 'constants/communities';
import { FormInputPhone } from 'components/FormInputPhone';

const GroomDetails = ({ control, register }) => {
  return (
    <Grid>
      <Grid container spacing={3} marginBottom="24px">
        <Typography fontWeight="bold" color="primary">
          Groom Details
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        <FormInputText
          name="groom_name"
          control={control}
          label="Groom Name"
          containerSize={{ xs: 12, md: 4 }}
          inputRef={{ ...register('groom_name') }}
        />
        <FormInputSelect
          name="groom_location"
          options={locations}
          control={control}
          placeholder="Groom Location"
          label="Groom Location"
          containerSize={{ xs: 12, md: 4 }}
          inputRef={{ ...register('groom_location') }}
        />
        <FormInputSelect
          name="groom_community"
          options={communities}
          control={control}
          placeholder="Groom Community"
          label="Groom Community"
          containerSize={{ xs: 12, md: 4 }}
          inputRef={{ ...register('groom_community') }}
        />
        <FormInputPhone
          name="groom_contact_number"
          containerSize={{ xs: 12, md: 4 }}
          control={control}
          label="Groom Contact Number"
          message="Either a valid Phone number or Email is required"
          inputRef={{
            ...register('groom_contact_number'),
          }}
        />
        <FormInputPhone
          name="groom_alternative_contact"
          containerSize={{ xs: 12, md: 4 }}
          control={control}
          label="Groom Alternative Number"
          message="Either a valid Phone number or Email is required"
          inputRef={{
            ...register('groom_alternative_contact'),
          }}
        />
        <FormInputText
          name="groom_email"
          containerSize={{ xs: 12, md: 4 }}
          control={control}
          label="Groom Email"
          message="Invalid email"
          inputRef={{
            ...register('groom_email', { pattern: /^\S+@\S+\.\S+$/i }),
          }}
        />
        <Grid container direction="column" size={{ xs: 12, md: 6 }}>
          <FormInputText
            name="groom_father_name"
            control={control}
            containerSize={{ xs: 12 }}
            label="Groom Father Name"
            inputRef={{
              ...register('groom_father_name'),
            }}
          />
          <FormInputText
            name="groom_mother_name"
            control={control}
            containerSize={{ xs: 12 }}
            label="Groom Mother Name"
            inputRef={{
              ...register('groom_mother_name'),
            }}
          />
        </Grid>
        <Grid container direction="column" size={{ xs: 12, md: 6 }}>
          <FormInputText
            name="groom_address"
            control={control}
            containerSize={{ xs: 12 }}
            multiline={true}
            minRows={4}
            label="Groom Address"
            inputRef={{
              ...register('groom_address'),
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GroomDetails;
