import {
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import EventPackages from './EventPackages';

const ClientEventItem = ({
  event,
  selectedPackage,
  handleEventStatus,
  handleEventChange,
}) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState();
  const [eventLocation, setEventLocation] = useState();
  const [eventNotes, setEventNotes] = useState();

  useEffect(() => {
    if (event?.date) setDate(moment(event?.date));
    if (event?.location) setEventLocation(event?.location);
    if (event?.notes) setEventLocation(event?.notes);
  }, [event]);

  const handleCheck = (e) => {
    setExpanded(event.status);
    handleEventStatus(e);
  };

  const handleDateChange = (d) => {
    setDate(d);
    handleEventChange('date', d);
  };
  const handleSaveChanges = (d) => {
    if (eventLocation) handleEventChange('location', eventLocation);
    if (eventNotes) handleEventChange('notes', eventNotes);
  };

  const handleAccordionChange = (e) => {
    e.stopPropagation();
  };

  return (
    <Grid container direction="column" style={{ width: '100%' }}>
      <Paper sx={{ borderRadius: 0 }}>
        <AccordionSummary
          onClick={handleAccordionChange}
          sx={{ bgcolor: 'rgba(0, 0, 0, .03)' }}
        >
          <Grid container justifyContent="space-between" sx={{ width: '100%' }}>
            <FormControlLabel
              label={event.name}
              control={
                <Checkbox checked={event.status} onChange={handleCheck} />
              }
            />
          </Grid>
        </AccordionSummary>

        {event?.status && (
          <AccordionDetails>
            <Grid container sx={{ p: 2, pb: 0 }} direction="column">
              <Grid container direction="row" spacing={2}>
                <Grid container direction="column" size={{ xs: 12, md: 5 }}>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                      slotProps={{ textField: { size: 'small' } }}
                      value={date}
                      label={event?.name + ' Date'}
                      onChange={handleDateChange}
                    />
                  </LocalizationProvider>
                  <TextField
                    label={event?.name + ' Location'}
                    fullWidth
                    size="small"
                    onChange={(e) => setEventLocation(e.target.value)}
                    value={eventLocation}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <TextField
                    label={event?.name + ' Notes'}
                    fullWidth
                    multiline
                    minRows={4}
                    maxRows={4}
                    size="small"
                    onChange={(e) => setEventNotes(e.target.value)}
                    value={eventNotes}
                  />
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  direction="column"
                  size={{ xs: 12, md: 2 }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleSaveChanges()}
                  >
                    Save Changes
                  </Button>
                  <Typography color="info" variant="subtitle2">
                    Please make sure you have Save Changes ⬆️ when you update
                    anything in the event
                  </Typography>
                </Grid>
              </Grid>
              {event?.services?.length > 0 && (
                <Grid>
                  <Divider style={{ margin: '16px 0' }}>
                    <Chip
                      label="Package Services"
                      variant="outlined"
                      style={{
                        backgroundColor: theme.palette.secondary.main,
                        color: '#fff',
                      }}
                    />
                  </Divider>
                  <EventPackages
                    event={event}
                    selectedPackage={selectedPackage}
                    handleEventChange={handleEventChange}
                  />
                </Grid>
              )}
            </Grid>
          </AccordionDetails>
        )}
      </Paper>
    </Grid>
  );
};

export default ClientEventItem;
