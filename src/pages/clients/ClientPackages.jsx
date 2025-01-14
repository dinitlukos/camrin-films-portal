import { Divider, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { FormInputText } from "../../components/FormInputText";
import FormGrid from "../../components/FormGrid";
import { FormInputSelect } from "../../components/FormInputSelect";
import { package_types, package_variants } from "../../constants/packages";
import _ from 'lodash'

const ClientPackages = ({
  control,
  register,
  packages,
  defPacks,
  quotationDate,
  onPackageChange,
  setQuotationDate,
  quotationValidity,
  setQuotationValidity,
}) => {
  console.log(packages)
  return (
    <Grid>
      <Typography fontWeight="bold" style={{ margin: "24px 0" }}>
        Package Details
      </Typography>
      <Grid container spacing={3}>
      <FormInputSelect
          name="package_type"
          options={package_types}
          control={control}
          placeholder="Package Type"
          label="Package Type"
          containerSize={{ xs: 12, md: 4 }}
          inputRef={{ ...register("package_type", { required: true }) }}
        />
        <Grid size={{ xs: 12, md: 6 }}></Grid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Quotation Date"
              value={quotationDate}
              onChange={(e) => setQuotationDate(e)}
            />
          </LocalizationProvider>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disablePast
              label="Quotation Validity"
              value={quotationValidity}
              onChange={(e) => setQuotationValidity(e)}
            />
          </LocalizationProvider>
        </FormGrid>
        {
          package_variants.map((v,k) =><Grid size={{ xs: 12, md: 3 }} key={k}>
            <TextField label={_.capitalize(v) + " price"} size="small"
            onChange={(e)=>{onPackageChange(v,"price",e.target.value)}}
             value={packages[v]?.price ?? 0}
             />
          </Grid>)
        }
        
        {/* <FormInputText
          name="gold_package_price"
          control={control}
          label="Golden Moments Package Price"
          message="Invalid Price"
          inputRef={{
            ...register("gold_package_price", {
              required: true,
              pattern: `^\d$`,
            }),
          }}
        /> */}
        {/* <FormInputText
          name="diamond_package_price"
          control={control}
          label="Diamond Memories Package Price"
          message="Invalid Price"
          inputRef={{
            ...register("diamond_package_price", {
              required: true,
              pattern: `^\d$`,
            }),
          }}
        /> */}
        
      </Grid>
      <Divider
        style={{ width: "100%", marginBottom: "24px", marginTop: "24px" }}
      />
    </Grid>
  );
};

export default ClientPackages;
