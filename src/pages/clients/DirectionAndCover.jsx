import Image from "@mui/icons-material/Image";
import { FormHelperText, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import React from "react";
import FormGrid from "components/FormGrid";
import { FormInputText } from "components/FormInputText";

const DirectionAndCover = ({control, register, coverPhoto, setCoverPhoto}) => {

    const handleFileUpload = (e) => {
        setCoverPhoto(e.target.files[0]);
      };
    return <Grid>
        <Typography fontWeight="bold" style={{ margin: "24px 0" }}>
              Direction & Cover Photo
            </Typography>
            <Grid container spacing={3}>
              <FormGrid size={{ xs: 12, md: 6 }}>
                <Grid container direction="row" alignItems="center" spacing={6}>
                  <Typography>Wedding google map location</Typography>
                  <FormInputText
                    name="wedding_direction"
                    control={control}
                    label="Direction"
                    placeholder="Loaction from google map"
                    inputRef={{ ...register("wedding_direction") }}
                  />
                </Grid>
              </FormGrid>
              <FormGrid size={{ xs: 12, md: 6 }}>
                <Grid container direction="row" alignItems="center" spacing={6}>
                  <Typography>Wedding invite cover photo</Typography>
                  <Button
                    variant="outlined"
                    startIcon={<Image />}
                    component="label"
                  >
                    Upload Image File
                    <input
                      type="file"
                      hidden
                      onChange={handleFileUpload}
                      accept=".png, .jpg, .jpeg"
                    />
                  </Button>
                  {coverPhoto && (
                    <FormHelperText style={{ color: "green" }}>
                      {coverPhoto?.name}
                    </FormHelperText>
                  )}
                </Grid>
              </FormGrid>
              <FormGrid size={{ xs: 12, md: 6 }}></FormGrid>
            </Grid>
    </Grid>
}

export default DirectionAndCover