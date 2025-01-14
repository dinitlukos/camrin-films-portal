import { CheckBox } from "@mui/icons-material";
import {
  alpha,
  Card,
  Chip,
  Divider,
  FormControlLabel,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import Deliverables from "./Deliverables";
import logo from "../../../assets/watermark.png";
import PaymentTerms from "./PaymentTerms";
import _ from "lodash";
import { clone } from "../../../shared/StringUtils";


const PackageType = ({ pack, variant = "classic", events }) => {
  const theme = useTheme();
  const color =
    variant == "premium"
      ? theme.palette.primary.main
      : theme.palette.secondary.main;

  const shadow =
    variant == "premium"
      ? "2px 1px 1px rgba(184, 43, 60, .2),0px 1px 1px 0px rgba(184, 43, 60, .14),0px 1px 3px 0px rgba(184, 43, 60, 1)"
      : "2px 1px 1px rgba(114, 58, 122, .2),0px 1px 1px 0px rgba(114, 58, 122, .14),0px 1px 3px 0px rgba(114, 58, 122, 1)";
  return (
    <Grid container style={{ height: "100%" }}>
      <Card style={{ boxShadow: shadow }}>
        <Grid
          style={{ backgroundColor: color, padding: "10px 10px" }}
          container
          justifyItems="center"
          alignItems="center"
          spacing={1}
          sx={{
            justifyContent: { xs: "center", lg: "space-between" },
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Typography color="#fff" fontWeight="bold">
            {pack?.title}
          </Typography>
          <Grid
            style={{
              backgroundColor: "#fff",
              color: color,
              padding: "5px 10px",
              borderRadius: "10px",
            }}
          >
            <Typography fontWeight="bold">
              Rs. {(pack?.price ?? "0").toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}/-
            </Typography>
          </Grid>
        </Grid>
        <Grid padding={4} container justifyContent="center" direction="column" style={{backgroundImage: `url(${logo})`, backgroundSize:'contain'}}>
          <Grid>
            <Typography>{pack?.description}</Typography>
          </Grid>
          <Grid container direction="column">
            {(clone(events) ?? []).map((v, k) => {
              console.log(v?.services)
              console.log()
              const s = _.keyBy(v?.services, "id")
              const items = s[variant]?.items ?? []
              if(items.length > 0)
                return (
                  <Grid key={k} container direction="column">
                    <Divider style={{ margin: "12px 0" }}>
                      <Chip
                        label={v?.name}
                        variant="filled"
                        style={{
                          backgroundColor: alpha(
                            variant == "premium"
                              ? theme.palette.primary.main
                              : theme.palette.secondary.main,
                            0.2
                          ),
                          color: color,
                        }}
                      />
                    </Divider>
                    {items.map((cv, ck) => (
                      <FormControlLabel
                        key={ck}
                        control={
                          <CheckBox
                            color={
                              variant == "premium" ? "primary" : "secondary"
                            }
                          />
                        }
                        label={cv.label}
                      />
                    ))}
                  </Grid>
                );
            })}
          </Grid>
          <Grid
            container
            justifyContent="center"
            style={{ padding: "20px 0 10px 0" }}
          >
            {pack?.offer && (
              <div style={{ padding: "0 20px" }}>
                <Grid
                  container
                  alignItems="center"
                  style={{ backgroundColor: color, minHeight: "50px" }}
                >
                  <div className="tri"></div>
                  <div className="blink">{pack?.offer}</div>
                </Grid>
              </div>
            )}
          </Grid>
          {pack?.deliverables && (
            <Deliverables deliverables={pack?.deliverables} color={color} />
          )}
          {
            pack?.payment_terms && (<PaymentTerms terms={pack?.payment_terms} color={color}/>)
          }
        </Grid>
      </Card>
    </Grid>
  );
};

export default PackageType;
