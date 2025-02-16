import { Divider, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { package_variants } from 'constants/packages';
import React from 'react';
import PackageItems from '../shared/PackageItems';

const PackageDetails = ({
  packages,
  setPackages,
  selectedPackage,
  onPackageChange,
}) => {
  const theme = useTheme();

  const handlePackageChange = (variant, field, value, operation = 'add') => {
    var o = packages;
    if (operation == 'add') o[variant][field] = value;
    if (operation == 'remove') delete o[variant][field];
    setPackages(o);
  };

  return (
    <Grid>
      <Typography
        fontWeight="bold"
        color="primary"
        style={{ margin: '24px 0' }}
      >
        Package Details
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <PackageItems
            variant={selectedPackage}
            packages={packages}
            showPrice={false}
            onPackageChange={onPackageChange}
            handlePackageChange={handlePackageChange}
          />
        </Grid>
      </Grid>
      <Divider
        style={{ width: '100%', marginBottom: '24px', marginTop: '24px' }}
      />
    </Grid>
  );
};

export default PackageDetails;
