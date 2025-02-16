import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { UserPackageAPI } from '../../../service/UserPackageAPI';
import Loader from 'components/Loader';
import CFAppBar from 'components/CFAppBar';

import _ from 'lodash';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  Typography,
  useTheme,
} from '@mui/material';
import { OfferAPI } from '../../../service/OfferAPI';
import { toast, ToastContainer } from 'react-toastify';

const not = (a, b) => {
  return a.filter((value) => !b.includes(value));
};

const intersection = (a, b) => {
  return a.filter((value) => b.includes(value));
};

const union = (a, b) => {
  return [...a, ...not(b, a)];
};

const OffersAdmin = () => {
  const [checked, setChecked] = useState([]);
  const [offerChecked, setOfferChecked] = useState([]);
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);
  const theme = useTheme();

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const fetchStories = async () => {
    setLoading(true);
    const d = await UserPackageAPI.getAllPackages();
    if (d && d.length > 0) {
      const fd = _.filter(d, (e) => !e?.reject);
      const data = _.map(fd, (v) => {
        return _.pick({ ...v, id: v.uid }, [
          'uid',
          'bride_name',
          'groom_name',
          'customer_contact',
        ]);
      });
      setLeft(data);
      await fetchOffers();
    } else {
      navigate('/', { replace: true });
    }
    setLoading(false);
  };
  const fetchOffers = async () => {
    const o = await OfferAPI.getAllOffers();
    setOffers(o.data);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logOut();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleOfferToggle = (v) => {
    setOfferChecked(v === offerChecked[0] ? [] : [v]);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const getName = (d) => {
    var n = [];
    if (!_.isEmpty(d?.groom_name) && d?.groom_name.trim()) n.push(d.groom_name);
    if (!_.isEmpty(d?.bride_name) && d?.bride_name.trim()) n.push(d.bride_name);
    return n.join(' + ');
  };

  const sendOffer = async () => {
    setLoading(true);
    try {
      const d = await OfferAPI.send({
        users: right,
        offer: offerChecked[0],
      });
      setLoading(false);

      toast.success('Offer sending process initiated');
    } catch (err) {
      setLoading(false);

      toast.error('Failed to send the offer!');
    }
  };

  const customList = (title, items) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 400,
          height: '60vh',
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItemButton
              key={value.uid}
              role="listitem"
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={getName(value)} />
            </ListItemButton>
          );
        })}
      </List>
    </Card>
  );

  return (
    <div>
      <CFAppBar
        title="Offers"
        handleLogout={() => handleLogout()}
        // enableBack={false}
      />
      <Grid
        container
        //   direction="column"
        // spacing={4}
        sx={{ p:4}}
      >
        <Grid
          container
          spacing={2}
          size={{ xs: 12, md: 8 }}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            border: `1px solid ${theme.palette.info.dark}`,
          }}
        >
          <Grid
            size={{ xs: 12 }}
            container
            alignItems="center"
            sx={{ background: theme.palette.info.dark, p: 2 }}
          >
            <Avatar sx={{background:'#fff', color:theme.palette.info.dark}}>1</Avatar>
            <Typography color="#fff">Select Users</Typography>
          </Grid>
          <Grid container sx={{ p: 2 }} alignItems='center'>
            <Grid size={{ md: 5 }}>{customList('Users', left)}</Grid>
            <Grid size={{ md: 2 }}>
              <Grid container direction="column" sx={{ alignItems: 'center' }}>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label="move selected right"
                >
                  &gt;
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
                >
                  &lt;
                </Button>
              </Grid>
            </Grid>
            <Grid size={{ md: 5 }}>{customList('Selected Users', right)}</Grid>
          </Grid>
          {loading && <Loader />}
        </Grid>
        <Grid
          container
          direction="column"
          //   justifyContent="center"
          spacing={2}
          sx={{
            border: `1px solid ${theme.palette.warning.dark}`,

          }}
          size={{ xs: 12, md: 4 }}
        >
          <Grid
            size={{ xs: 12 }}
            container
            alignItems="center"
            sx={{ background: theme.palette.warning.dark, p: 2 }}
          >
            <Avatar sx={{background:'#fff', color:theme.palette.warning.dark}}>2</Avatar>
            <Typography color="#fff">Select Offer</Typography>
          </Grid>
          <Grid>
            <List dense sx={{ width: '100%' }}>
              {offers.map((v, k) => (
                <ListItem
                  key={k}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={() => handleOfferToggle(v)}
                      checked={offerChecked.includes(v)}
                      //   inputProps={{ 'aria-labelledby': labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${v.offerId}`}
                        sx={{
                          background: theme.palette.secondary.main,
                          fontSize: '16px',
                        }}
                      >
                        {v.percentage ?? 0}%
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={v.title} secondary={v.code} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              disabled={right.length == 0 || offerChecked.length == 0}
              onClick={() => sendOffer()}
            >
              Send Offer
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default OffersAdmin;
