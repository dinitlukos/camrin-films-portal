import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { FormInputText } from "../../components/FormInputText";
import { FormInputSelect } from "../../components/FormInputSelect";
import { locations } from "../../constants/locations";
import { communities } from "../../constants/communities";

const GroomDetails = ({ control, register }) => {
  return (
    <Grid>
      <Grid container spacing={3} marginBottom="12px">
        <Typography fontWeight="bold">Groom Details</Typography>
      </Grid>
      <Grid container spacing={3}>
        <FormInputText
          name="groom_name"
          control={control}
          label="Groom Name"
          containerSize={{ xs: 12, md: 4 }}
          inputRef={{ ...register("groom_name", { required: true }) }}
        />
        <FormInputSelect
          name="groom_location"
          options={locations}
          control={control}
          placeholder="Groom Location"
          label="Groom Location"
          containerSize={{ xs: 12, md: 4 }}
          inputRef={{ ...register("groom_location", { required: true }) }}
        />
        <FormInputSelect
          name="groom_community"
          options={communities}
          control={control}
          placeholder="Groom Community"
          label="Groom Community"
          containerSize={{ xs: 12, md: 4 }}
          inputRef={{ ...register("groom_community", { required: true }) }}
        />
        <FormInputText
          name="groom_father_name"
          control={control}
          label="Groom Father Name"
          inputRef={{
            ...register("groom_father_name", { required: true }),
          }}
        />
        <FormInputText
          name="groom_mother_name"
          control={control}
          label="Groom Mother Name"
          inputRef={{
            ...register("groom_mother_name", { required: true }),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default GroomDetails;
