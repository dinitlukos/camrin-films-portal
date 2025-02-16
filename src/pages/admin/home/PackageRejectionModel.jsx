import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';

import { Button, MenuItem, TextField } from '@mui/material';
import { rejection_reasons } from '../../../constants/packages';

const PackageRejectionModel = ({ open, handleRejection, handleModelClose }) => {
  const [rejectionReason, setRejectionReason] = useState('');
  const [rejectionType, setRejectionType] = useState(rejection_reasons[0]);
  return (
    <Dialog open={open} onClose={handleModelClose}>
      <DialogTitle id="alert-dialog-title">
        User Package Rejection Reason
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText id="alert-dialog-description"> */}
        <Grid container spacing={2} sx={{ p: 2 }}>
          <TextField
            select
            fullWidth
            // size={size}
            onChange={(e) => {
              setRejectionType(e.target.value);
            }}
            label="Rejection Reason"
            // error={!!error}
            value={rejectionType}
          >
            {rejection_reasons.map((d, k) => (
              <MenuItem key={k} value={d}>
                {d}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            multiline
            placeholder="Rejection details"
            minRows={4}
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="info" onClick={handleModelClose}>
          Cancel
        </Button>
        <Button
          color="error"
          onClick={() => {
            handleRejection(rejectionReason, rejectionType);
            setRejectionReason('');
            setRejectionType(rejection_reasons[0]);
          }}
          autoFocus
        >
          Confirm Rejection
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PackageRejectionModel;
