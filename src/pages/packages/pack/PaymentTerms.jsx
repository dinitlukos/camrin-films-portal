import {
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const PaymentTerms = ({ terms, color }) => {
  return (
    <Grid container direction="column">
      <Divider style={{ margin: "12px 0" }}>
        <Chip
          label="Payment Terms"
          variant="outlined"
          style={{ backgroundColor: color, color: "#fff" }}
        />
      </Divider>
      <Grid >
        <Card style={{ height: "100%" }}>
          <CardContent>
            <List>
              {terms.map((v, k) => (
                <ListItem disablePadding key={k}>
                  <ListItemText style={{ fontSize: "14px" }}>
                    <Typography variant="body2" fontWeight="bold">
                      {v.title}:&nbsp;
                    </Typography>
                    <Typography variant="body2">{v.description}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PaymentTerms;
