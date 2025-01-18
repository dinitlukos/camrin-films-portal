import { Divider, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import FormGrid from "../../components/FormGrid";
import { FormInputMultiSelect } from "../../components/FormInputMultiSelect";
import { FormInputSelect } from "../../components/FormInputSelect";
import { package_modes, package_variants } from "../../constants/packages";
import PackageItems from "./PackageItems";

const PackageDetails = ({
  control,
  register,
  packages,
  packageBooked,
  setPackages,
  packageType,
  setPackageType,
  defPacks,
  quotationDate,
  onPackageChange,
  setQuotationDate,
  quotationValidity,
  setQuotationValidity,
}) => {
  const theme = useTheme();

  const handlePackageChange = (variant, field, value, operation = "add") => {
    var o = packages;
    if (operation == "add") o[variant][field] = value;
    if (operation == "remove") delete o[variant][field];
    setPackages(o);
  };

  return (
    <Grid>
      <Typography
        fontWeight="bold"
        color="primary"
        style={{ margin: "24px 0" }}
      >
        Package Details
      </Typography>
      <Grid container spacing={3}>
        <FormInputSelect
          name="package_type"
          disabled={packageBooked}
          options={package_modes}
          variant="id"
          control={control}
          placeholder="Package Type"
          handleOnChange={(v) => setPackageType(v)}
          label="Package Type"
          containerSize={{ xs: 12, md: 6 }}
          inputRef={{ ...register("package_type", { required: true }) }}
        />

        {packageType && (
          <FormInputMultiSelect
            name="package_suggestions"
            disabled={packageBooked}
            options={package_variants}
            control={control}
            placeholder="Package Suggestions"
            label="Package Suggestions"
            containerSize={{ xs: 12, md: 6 }}
            inputRef={{
              ...register("package_suggestions", { required: true }),
            }}
          />
        )}
        {packageType && (
          <FormGrid size={{ xs: 12, md: 6 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Quotation Date"
                value={quotationDate}
                slotProps={{ textField: { size: "small" } }}
                onChange={(e) => setQuotationDate(e)}
              />
            </LocalizationProvider>
          </FormGrid>
        )}
        {packageType && (
          <FormGrid size={{ xs: 12, md: 6 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                // disablePast
                label="Quotation Validity"
                slotProps={{ textField: { size: "small" } }}
                value={quotationValidity}
                onChange={(e) => setQuotationValidity(e)}
              />
            </LocalizationProvider>
          </FormGrid>
        )}
        {packageType &&
          package_variants.map((v, k) => (
            <Grid size={{ xs: 12, md: 6 }} key={k}>
              <PackageItems
                variant={v}
                packages={packages}
                onPackageChange={onPackageChange}
                handlePackageChange={handlePackageChange}
              />
            </Grid>
          ))}
      </Grid>
      <Divider
        style={{ width: "100%", marginBottom: "24px", marginTop: "24px" }}
      />
    </Grid>
  );
};

export default PackageDetails;
