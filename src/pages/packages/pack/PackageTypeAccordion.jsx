import { CheckBox } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  alpha,
  Button,
  Card,
  Chip,
  Divider,
  FormControlLabel,
  Typography,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import Deliverables from './Deliverables';
import logo from 'assets/watermark.png';
import PaymentTerms from './PaymentTerms';
import _ from 'lodash';
import { clone } from 'src/shared/StringUtils';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PackageTypeAccordion = ({ pack, variant = 'golden', events, size }) => {
  const theme = useTheme();
  const color = {
    silver: theme.palette.info.main,
    golden: theme.palette.secondary.main,
    platinum: theme.palette.warning.main,
    diamond: theme.palette.primary.main,
  };

  const color_strings = {
    silver: 'info',
    golden: 'secondary',
    platinum: 'warning',
    diamond: 'primary',
  };

  const shadow = {
    silver:
      '2px 1px 1px rgba(58, 98, 122, .2),0px 1px 1px 0px rgba(58, 98, 122, .14),0px 1px 3px 0px rgba(58, 98, 122, 1)',
    golden:
      '2px 1px 1px rgba(114, 58, 122, .2),0px 1px 1px 0px rgba(114, 58, 122, .14),0px 1px 3px 0px rgba(114, 58, 122, 1)',
    platinum:
      '2px 1px 1px rgba(122,82,58, .2),0px 1px 1px 0px rgba(122,82,58, .14),0px 1px 3px 0px rgba(122,82,58, 1)',
    diamond:
      '2px 1px 1px rgba(184, 43, 60, .2),0px 1px 1px 0px rgba(184, 43, 60, .14),0px 1px 3px 0px rgba(184, 43, 60, 1)',
  };
  return (
    <Grid container>
      <Accordion style={{ boxShadow: shadow[variant], margin: 0 }}>
        <AccordionSummary
          sx={{
            // padding: 0,
            margin: 0,
            backgroundColor: color[variant],
          }}
        >
          <Grid container direction="column">
            <Grid
              style={{ padding: '10px 10px' }}
              container
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{
                justifyContent: { xs: 'center', lg: 'space-between' },
                flexDirection: { xs: 'column', lg: 'row' },
              }}
            >
              <Typography color="#fff" fontWeight="bold">
                {pack?.title}
              </Typography>
              <Grid
                style={{
                  backgroundColor: '#fff',
                  color: color[variant],
                  padding: '5px 10px',
                  borderRadius: '10px',
                }}
              >
                <Typography fontWeight="bold">
                  Rs.{' '}
                  {(pack?.price ?? '0')
                    .toString()
                    .replace(/(\d)(?=(\d\d)+\d$)/g, '$1,')}
                  /-
                </Typography>
              </Grid>
            </Grid>
            <Grid sx={{ backgroundColor: '#fff', padding: theme.spacing(4) }}>
              <Typography>{pack?.description}</Typography>
            </Grid>
            <Grid
              container
              direction="column"
              alignItems="center"
              sx={{ pt: theme.spacing(2) }}
            >
              <Typography>More Info</Typography>
              {/* <Button color=''>More Details</Button> */}
              {/* <ExpandMoreIcon color="primary" /> */}
              <div class="arrow">
                {/* <span></span> */}
                {/* <span></span> */}
                <span></span>
              </div>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            padding={4}
            container
            justifyContent="center"
            // alignItems="center"
            direction="column"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: 'contain',
            }}
          >
            <Grid container direction="column">
              {(clone(events) ?? []).map((v, k) => {
                const s = _.keyBy(v?.services, 'id');
                const items = s[variant]?.items ?? [];
                if (items.length > 0)
                  return (
                    <Grid key={k} container direction="column">
                      <Divider style={{ margin: '12px 0' }}>
                        <Chip
                          label={v?.name}
                          variant="filled"
                          style={{
                            backgroundColor: alpha(color[variant], 0.2),
                            color: color[variant],
                          }}
                        />
                      </Divider>
                      {items.map((cv, ck) =>
                        cv?.status ? (
                          <FormControlLabel
                            key={ck}
                            control={
                              <CheckBox color={color_strings[variant]} />
                            }
                            label={cv.label}
                          />
                        ) : (
                          <Grid />
                        )
                      )}
                    </Grid>
                  );
              })}
            </Grid>
            <Grid
              container
              justifyContent="center"
              style={{ padding: '20px 0 10px 0' }}
            >
              {pack?.offer && (
                <div style={{ padding: '0 20px' }}>
                  <Grid
                    container
                    alignItems="center"
                    style={{
                      backgroundColor: color[variant],
                      minHeight: '50px',
                    }}
                  >
                    <div className="tri"></div>
                    <div className="blink">{pack?.offer}</div>
                  </Grid>
                </div>
              )}
            </Grid>
            {pack?.deliverables && (
              <Deliverables
                deliverables={pack?.deliverables}
                color={color[variant]}
              />
            )}
            {pack?.payment_terms && (
              <Grid size={{ md: 12 }}>
                <PaymentTerms
                  terms={pack?.payment_terms}
                  color={color[variant]}
                />
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Card style={{ boxShadow: shadow[variant] }}></Card>
    </Grid>
  );
};

export default PackageTypeAccordion;
