import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

import { Button } from "@mui/material";

const ConfirmModel = ({ open, handleDelete, handleModelClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleModelClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure to delete this client?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please note that once you delete the client, Client no further able to
          access the invitation and gallary screen, but gallary images will be
          keep in storage
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="info" onClick={handleModelClose}>
          Cancel
        </Button>
        <Button color="error" onClick={handleDelete} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModel;
