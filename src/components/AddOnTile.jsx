import DeleteIcon from "@mui/icons-material/Help";
import { CardActions, CardContent, Popover } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Images } from "../constants/images";

const AddOnTile = ({ addOn }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid size={{ xs: 6, md: 4, lg: 2 }}>
      <Card >
          <CardMedia
            component="img"
            height="140"
            image={Images[addOn?.image]}
          />
           <CardContent >
           <Typography gutterBottom variant="h7" component="span">
              {addOn?.title}
            </Typography>
            <IconButton aria-label="delete" size="small" onClick={handleClick}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
           </CardContent>
      </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Grid padding={2}>
        {
            addOn?.description.split("\n").map((v,k) => <Typography key={k} component="div" textAlign="justify">{v}</Typography>)
        }
        </Grid>
        
      </Popover>
    </Grid>
  );
};

export default AddOnTile;
