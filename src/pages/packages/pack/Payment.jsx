import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import upi from "../../../assets/packages/upi.png";

const Payment = () => {
  const theme = useTheme();

  const payment_terms = [
    {
      title: "Booking Amount",
      description: "10% of the total package cost (INR) to be paid in advance.",
    },
    {
      title: "Engagement Day Payment",
      description:
        "40% of the total package cost to be paid on the engagement day.",
    },
    {
      title: "Wedding Day Payment",
      description:
        "40% of the total package cost to be paid on the wedding day.",
    },
    {
      title: "Balance Payment",
      description:
        "The remaining amount is to be paid after the design confirmation of the album leafs, prior to printing the album.",
    },
  ];
  return (
    <Grid container spacing={2} flexDirection="column">
      <Grid container>
        <Grid container flexDirection="row" alignItems="center" spacing={0}>
          <Grid
            style={{
              width: "5px",
              height: "100%",
              backgroundColor: theme.palette.secondary.main,
              marginRight: "2px",
            }}
          />
          <Grid
            style={{
              backgroundColor: theme.palette.secondary.main,
              textAlign: "center",
              padding: "5px 20px 5px 20px",
              minWidth: "200px",
            }}
          >
            <Typography color="#fff" fontWeight="bold">
              Payment & Delivery
            </Typography>
          </Grid>
          <Grid
            style={{
              width: "5px",
              height: "100%",
              backgroundColor: theme.palette.secondary.main,
              marginLeft: "2px",
            }}
          />
        </Grid>
      </Grid>
      <Grid>
        {/* <Paper> */}
        <Grid container flexDirection="row" spacing={2}>
          <Grid size={{ xs: 12, sm: 8, md: 8, lg: 3 }}>
            <Card style={{ height: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Delivery Terms
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  The original photographs will be available in our Cochin
                  office and you can collect them directly after the shoot. If
                  you can download them from the cloud we will upload the images
                  into the cloud and send you the link. Please be informed if
                  you require this. The overall design process will take 15 to
                  20 working days. If you are not able to select photos for your
                  wedding album, we will design and send the PDF for
                  corrections. Printing will take another 5 more days.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 3 }} order={{ sm: 2, lg: 3 }}>
            <Card style={{ height: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Bank Account
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  CAMRIN FILMS PVT LTD
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  A/c No: 50200 101281330
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  IFSC: HDFC0000684
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Branch: Kakkanad
                </Typography>
                {/* <Typography gutterBottom variant="h6" component="div">
                  UPI
                </Typography> */}
                <Grid container alignItems="center" paddingTop={4} spacing={3}>
                  <img src={upi} height="30px" />
                  {/* <Divider orientation="vertical" variant="inset" /> */}
                  <Typography
                    variant="span"
                    sx={{ color: "text.secondary", fontWeight: "bold" }}
                  >
                    7510615035
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Payment;
