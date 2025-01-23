import Grid from "@mui/material/Grid2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { terms_service_cancellation } from "constants/constants";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

const Terms = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);

  return (
    <Grid>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary
          // expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            fontWeight="bold"
            color={theme.palette.secondary.main}
          >
            Cancellation Policy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Once the advance payment is made and services are confirmed, we will
            assign professionals for your event. In case of cancellation, the
            following terms will apply:
          </Typography>
          <List>
            {(terms_service_cancellation ?? []).map((v, k) => (
              <ListItem
                key={k}
                dense
                disablePadding
                disableGutters
                alignItems="flex-start"
              >
                <ListItemIcon style={{ minWidth: "34px" }}>
                  <StarIcon fontSize="12" />
                </ListItemIcon>
                <ListItemText>{v}</ListItemText>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default Terms;
