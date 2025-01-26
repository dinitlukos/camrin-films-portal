import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { FormInputText } from "components/FormInputText";
import { FormInputSelect } from "components/FormInputSelect";
import { locations } from "constants/locations";
import { communities } from "constants/communities";

const BrideDetails = ({ control, register }) => {
  return (
    <Grid>
      <Grid container spacing={3} marginBottom="24px">
        <Typography fontWeight="bold" color="primary">Bride Details</Typography>
      </Grid>
      <Grid container spacing={3}>
        <FormInputText
          name="bride_name"
          control={control}
          label="Bride Name"
          containerSize={{xs:12,md:4}}
          inputRef={{ ...register("bride_name") }}
        />
        <FormInputSelect
          name="bride_location"
          options={locations}
          control={control}
          placeholder="Bride Location"
          label="Bride Location"
          containerSize={{xs:12,md:4}}
          inputRef={{ ...register("bride_location") }}
        />
        <FormInputSelect
          name="bride_community"
          options={communities}
          control={control}
          placeholder="Bride Community"
          label="Bride Community"
          containerSize={{xs:12,md:4}}
          inputRef={{ ...register("bride_community") }}
        />
        <FormInputText
          name="bride_father_name"
          control={control}
          label="Bride Father Name"
          inputRef={{
            ...register("bride_father_name"),
          }}
        />
        <FormInputText
          name="bride_mother_name"
          control={control}
          label="Bride Mother Name"
          inputRef={{
            ...register("bride_mother_name"),
          }}
        />
        
      </Grid>
    </Grid>
  );
};

export default BrideDetails;
