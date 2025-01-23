import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import _ from "lodash";
import React from "react";
import EditableList from "components/EditableList";

const PackageItems = ({
  variant,
  packages,
  onPackageChange,
  handlePackageChange,
}) => {
  const theme = useTheme();
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container alignItems="center">
          <Typography color={theme.palette.warning.main} fontWeight="bold">
            {_.capitalize(variant)}
          </Typography>
          <Typography variant="caption" paddingLeft={1}>
            (Expand to update price and deliverables)
          </Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="row" spacing={2} sx={{pb:2}}>
        <Grid size={{xs:4}}>

        <TextField
          label="Price"
          fullWidth
          size="small"
          onChange={(e) => onPackageChange(variant, "price", e.target.value)}
          value={packages[variant]?.price ?? 0}
        />
        </Grid>
        <Grid size={{xs:8}}>

        <TextField
          label="Offer"
          fullWidth

          size="small"
          onChange={(e) => onPackageChange(variant, "offer", e.target.value)}
          value={packages[variant]?.offer ?? ""}
        />
        </Grid>
        </Grid>
        
        
        <EditableList
          data={packages[variant]?.deliverables}
          size={{ xs: 12 }}
          handleDataUpdate={(d) =>
            handlePackageChange(variant, "deliverables", d)
          }
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default PackageItems;
