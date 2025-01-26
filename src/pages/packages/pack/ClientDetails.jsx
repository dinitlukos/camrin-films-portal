import { alpha, Card, List, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import calendarImage from 'assets/calendar_primary.png';
import spiral from 'assets/packages/spiral.svg';
import spiralSecondary from 'assets/packages/spiral_secondary.svg';
import AvatarListItem from 'components/AvatarListItem';

import { package_mode_label } from 'constants/packages';

const ClientDetails = ({ data }) => {
  const theme = useTheme();

  const getUserName = () => {
    var user = []
    if (data?.groom_name?.trim()) user.push(data?.groom_name?.trim())
    if (data?.bride_name?.trim()) user.push(data?.bride_name?.trim())
    return user.join(" & ")
  };
  return (
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      <Grid size={{ xs: 12, md: 4 }} order={{ xs: 2, sm: 2, md: 1 }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            spacing={2}
            style={{
              padding: 10,
              border: '1px solid',
              backgroundColor: '#fff',
              borderColor: alpha(theme.palette.secondary.light, 0.9),
              borderRadius: 10,
            }}
          >
            <Typography color={theme.palette.secondary.light}>
              Client Details
            </Typography>
          </Grid>
        </Grid>
        <Card style={{ marginTop: -20, paddingTop: 20 }}>
          <Grid container alignItems="flex-end" direction="column">
            <img
              src={spiralSecondary}
              height="150px"
              weight="150px"
              style={{ position: 'absolute', marginTop: -20 }}
            />
          </Grid>
          <List>
            <AvatarListItem label={getUserName()} icon="people" />
            <AvatarListItem
              label={package_mode_label[data?.package_type ?? 'duel']}
              icon="loyalty"
            />
            <AvatarListItem
              label={_.map(data?.events, 'name').join(', ')}
              icon="event"
            />
            <AvatarListItem label={data?.wedding_location} icon="location" />
          </List>
        </Card>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="column"
        size={{ xs: 12, md: 4 }}
        order={{ xs: 1, sm: 1, md: 2 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={1}
          sx={{
            height: '170px',
            width: '130px',
            pt: '45px',
            textAlign: 'center',
            backgroundImage: `url(${calendarImage})`,
            backgroundSize: '100%',
            backgroundRepeat: 'round',
          }}
        >
          <Typography variant="body2" component="div" color="textPrimary">
            WEDDING
          </Typography>
          <Typography
            component="div"
            variant="h4"
            padding="0"
            color="primary"
            fontWeight="900"
          >
            {moment(data?.wedding_date).format('DD')}
          </Typography>
          <Typography variant="body2" component="div" color="textPrimary">
            {moment(data?.wedding_date).format('MMM yyyy')}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" className="name" align="center">
            {data?.groom_name?.trim() && data?.bride_name?.trim()
              ? getUserName()
              : 'Wedding Package'}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        order={{ sm: 3, md: 3 }}
        sx={{ height: '100%', display: { xs: 'none', sm: 'block' } }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            spacing={2}
            style={{
              padding: 10,
              border: '1px solid',
              backgroundColor: '#fff',
              borderColor: alpha(theme.palette.primary.light, 0.9),
              borderRadius: 10,
            }}
          >
            <Typography color={theme.palette.primary.light}>
              Quotation Details
            </Typography>
          </Grid>
        </Grid>
        <Card style={{ marginTop: -20, paddingTop: 20 }}>
          <Grid container alignItems="flex-end" direction="column">
            <img
              src={spiral}
              height="150px"
              weight="150px"
              style={{ position: 'absolute', marginTop: -20 }}
            />
          </Grid>
          <List>
            <AvatarListItem
              label="Quotation Date"
              value={moment(data?.packages?.quotation?.date).format(
                'Do MMM yyyy'
              )}
              icon="clock"
              variant="primary"
            />
            <AvatarListItem
              label="Valid Upto"
              value={moment(
                data?.packages?.quotation?.validity
              ).format('Do MMM yyyy')}
              icon="clock"
              variant="primary"
            />
            
            <AvatarListItem
              label="Quotation By"
              value="Camrin Films"
              icon="business"
              variant="primary"
            />
            <AvatarListItem
              label="Contact"
              value="+91 99471 54117"
              icon="call"
              variant="primary"
            />
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ClientDetails;
