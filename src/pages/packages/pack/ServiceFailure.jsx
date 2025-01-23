import Grid from "@mui/material/Grid2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material";
import {
  service_failure,
  terms_service_cancellation,
} from "constants/constants";
import { useState } from "react";
const ServiceFailure = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true)
  return (
    <Grid>
      <Accordion expanded={expanded} onChange={()=> setExpanded(!expanded)}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            fontWeight="bold"
            color={theme.palette.secondary.main}
          >
            Unforeseen Circumstances Guarantee
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{service_failure}</Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default ServiceFailure;
