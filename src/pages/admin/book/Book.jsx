import { Divider, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { alpha, Box } from '@mui/system';
import CFAppBar from 'components/CFAppBar';
import ErrorSnackBar from 'components/ErrorSnackBar';
import FormGrid from 'components/FormGrid';
import Loader from 'components/Loader';
import {
  all_events,
  event_default_values,
  events_order,
} from 'constants/events';
import { package_variants } from 'constants/packages';
import dayjs from 'dayjs';
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from 'src/auth/AuthProvider';
import { UserPackageAPI } from 'src/service/UserPackageAPI';
import { sort } from 'src/shared/ObjectUtils';
import composePaymentTerms from 'src/shared/payment';
import { clone, generateUId } from 'src/shared/StringUtils';
import BrideDetails from '../shared/BrideDetails';
import GroomDetails from '../shared/GroomDetails';
import ClientEvents from './ClientEvents';
import { getProperties } from './ClientService';
import PackageDetails from './PackageDetails';
import BookDetails from './BookDetails';
import { Typography } from '@mui/joy';

export default function Book() {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const { logOut } = React.useContext(AuthContext);
  const [events, setEvents] = useState(
    clone(sort(all_events['duel'], events_order))
  );
  const [packages, setPackages] = useState([]);
  const [packageType, setPackageType] = useState('duel');
  const [pck, setPck] = useState('');
  const theme = useTheme();
  const uId = location.state?.id;
  const editBooking = location.state?.edit ?? false;

  const fetchUserData = async () => {
    try {
      var data = event_default_values;
      var pcks = [];
      const defPacks = await getProperties('packages');
      setLoading(true);
      if (uId) {
        const d = await UserPackageAPI.getPackageById(uId);
        if (d) {
          const packageType = d['package_type'] ?? 'duel';
          const ev = _.map(clone(all_events[packageType]), (e) => {
            const cp = _.find(d['events'], { name: e.name });
            return cp ? { ...e, ...cp, status: true } : e;
          });
          data = { ...d };
          _.forIn(d, (v, k) => {
            setValue(k, v);
          });
          if (d['package_booked']) {
            setPck(d['package_booked']);
            if (d['booking'])
              setValue('advance_amount', d['booking']['advance']);
          }
          pcks = d['packages'];
          const sortedEv = sort(ev, events_order);
          setEvents(sortedEv);
        } else {
          //No User found in DB
        }
      }
      if (pcks.length <= 0) {
        pcks = defPacks['duel'];
      }
      setPackages(pcks);
      setLoading(false);
      return data;
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset, control, getValues, setValue } =
    useForm({ defaultValues: event_default_values });

  useEffect(() => {
    fetchUserData();
  }, [location.state]);

  const onSubmit = async (data) => {
    const { groom_name, bride_name, customer_email, advance_amount } = data;
    try {
      setLoading(true);
      const evs = clone(events);
      var ev = await refactorEvents(uId, evs);
      var pcks = await composePackage(ev, data);
      data['uid'] = uId;
      data['packages'] = pcks;
      data['events'] = ev;
      data['package_booked'] = pck;
      delete data['_id'];
      delete data['advance_amount'];
      delete data['disable_whatsapp'];
      data['status'] = 'Package Booked';
      data['booking'] = {
        date: moment().format(),
        advance: advance_amount,
        package: pck,
        total: pcks[pck].price,
        status: 'Booking Confirmed',
      };
      if (editBooking) {
        await UserPackageAPI.update(uId, data);
      } else {
        await UserPackageAPI.book(uId, data);
      }
      reset();
      setLoading(false);
      navigate(-1);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const refactorEvents = async (uId, ev) => {
    var e = _.filter(ev, ['status', true]);
    for (let i = 0; i < e?.length; i++) {
      delete e[i]?.status;
      delete e[i]?.image;
    }
    return e;
  };

  const handlePackageInputChange = (p, k, v) => {
    packages[p][k] = v;
    setPackages({ ...packages });
  };

  const composePackage = async (ev, d) => {
    var pck = clone(packages);
    const evKeys = _.map(ev, (o) => o.id);
    package_variants.forEach((v, i) => {
      pck[v]['payment_terms'] = composePaymentTerms(v, evKeys);
    });
    return pck;
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      const res = await logOut();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrMessage(err);
      setShowSnackBar(true);
    }
  };

  return (
    <div>
      <CFAppBar title="Book Client" handleLogout={handleLogout} />
      <Grid container>
        <React.Fragment>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Grid
              sx={{
                background: alpha(theme.palette.info.main, 0.5),
                padding: '20px 3%',
              }}
            >
              <Grid sx={{ background: '#fff', p: '20px 3%' }}>
                <Typography sx={{ color: 'red' }} textAlign="center">
                  Make sure to fill the maximum information (All the Booking
                  Detail fields are mandatory required)
                </Typography>

                <BookDetails
                  control={control}
                  register={register}
                  setPackageType={(v) => setPackageType(v)}
                  setPackage={(v) => setPck(v)}
                  packages={packages}
                  variant={pck}
                  onPackageChange={handlePackageInputChange}
                />
              </Grid>
            </Grid>
            {pck && (
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexGrow: 1,
                  padding: '20px 5%',
                }}
              >
                <GroomDetails control={control} register={register} />
                <Divider
                  style={{ width: '100%', marginTop: 24, marginBottom: 24 }}
                />
                <BrideDetails control={control} register={register} />
                <Divider
                  style={{ width: '100%', marginTop: 24, marginBottom: 24 }}
                />

                {packageType && (
                  <Grid>
                    <Grid container spacing={3}>
                      <ClientEvents
                        events={events}
                        pcks={packages}
                        selectedPackage={pck}
                        setEvents={setEvents}
                        setRefresh={setRefresh}
                      />
                    </Grid>
                    <Divider style={{ width: '100%' }} />
                  </Grid>
                )}
                <Divider
                  style={{ width: '100%', marginTop: 24, marginBottom: 24 }}
                />
                <PackageDetails
                  packages={packages}
                  setPackages={setPackages}
                  onPackageChange={handlePackageInputChange}
                  selectedPackage={pck}
                />
                <Grid container direction="row" spacing={12}>
                  <Button
                    type="submit"
                    fullWidth
                    sx={{ minWidth: '300px' }}
                    variant="contained"
                    onClick={handleSubmit(onSubmit)}
                  >
                    {editBooking ? 'Modify Booking' : 'Book Package'}
                  </Button>
                </Grid>
              </Grid>
            )}
          </form>
          {loading && <Loader />}
        </React.Fragment>
      </Grid>
      <ErrorSnackBar
        message={errMessage}
        open={showSnackBar}
        setOpen={setShowSnackBar}
      />
    </div>
  );
}
