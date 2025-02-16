import { alpha, TextField, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FormInputSelect } from 'components/FormInputSelect';
import React from 'react';
import { FormInputText } from 'components/FormInputText';
import { FormInputPhone } from 'components/FormInputPhone';

import {
  package_modes,
  package_requestors,
  package_variants,
} from '../../../constants/packages';

const BookDetails = ({
  control,
  register,
  setPackageType,
  setPackage,
  onPackageChange,
  packages,
  variant,
}) => {
  return (
    <Grid
      container
      direction="column"
      spacing={3}
    >
      <Grid container>
        <Typography fontWeight="bold" color="primary">
          Booking Details
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        <FormInputSelect
          name="package_type"
          options={package_modes}
          variant="id"
          control={control}
          placeholder="Package Type"
          handleOnChange={(v) => setPackageType(v)}
          label="Package Type"
          containerSize={{ xs: 12, md: 6 }}
          inputRef={{ ...register('package_type', { required: true }) }}
        />
        <FormInputSelect
          name="package_booked"
          options={package_variants}
          control={control}
          placeholder="Opted Package"
          handleOnChange={(v) => setPackage(v)}
          label="Opted Package"
          containerSize={{ xs: 12, md: 6 }}
          inputRef={{
            ...register('package_booked', { required: true }),
          }}
        />
      </Grid>
      {variant && (
        <Grid container direction="row" spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Package Amount"
              fullWidth
              size="small"
              onChange={(e) =>
                onPackageChange(variant, 'price', e.target.value)
              }
              value={packages[variant]?.price ?? 0}
            />
          </Grid>
          <FormInputText
            name="advance_amount"
            control={control}
            label="Advance Amount"
            rules={{ required: true }}
            type="number"
            inputRef={{
              ...register('advance_amount', { min: 0, max: 1000000 }),
            }}
          />
          <FormInputSelect
            name="package_requested_by"
            options={package_requestors}
            variant="id"
            control={control}
            placeholder="Package Requested By"
            label="Package Requested By"
            containerSize={{ xs: 12, md: 6 }}
            inputRef={{
              ...register('package_requested_by', { required: true }),
            }}
          />
          <FormInputText
            name="customer_name"
            control={control}
            label="Contact Name"
            message="Contact name is required"
            inputRef={{
              ...register('customer_name', { required: true }),
            }}
          />
          <FormInputPhone
            name="customer_contact"
            control={control}
            label="Contact Number"
            message="Phone number is required"
            rules={{
              required: true,
            }}
            inputRef={{
              ...register('customer_contact'),
            }}
          />

          <FormInputText
            name="customer_email"
            control={control}
            label="Contact Email"
            rules={{
              required: true,
            }}
            message="Invalid email ID"
            inputRef={{
              ...register('customer_email', { pattern: /^\S+@\S+\.\S+$/i }),
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default BookDetails;
