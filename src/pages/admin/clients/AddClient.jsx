import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/system';
import dayjs from 'dayjs';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from 'src/auth/AuthProvider';
import CFAppBar from 'components/CFAppBar';
import ErrorSnackBar from 'components/ErrorSnackBar';
import FormGrid from 'components/FormGrid';
import { all_events, event_default_values } from 'constants/events';
import { package_variants } from 'constants/packages';
import { db } from 'src/firebase';
import composePaymentTerms from 'src/shared/payment';
import { clone, generateUId } from 'src/shared/StringUtils';
import Loader from 'components/Loader';
import BrideDetails from './BrideDetails';
import ClientEvents from './ClientEvents';
import { createStorage, getProperties, uploadFile } from './ClientService';
import DirectionAndCover from './DirectionAndCover';
import GroomDetails from './GroomDetails';
import PackageDetails from './PackageDetails';
import WeddingDetails from './WeddingDetails';
import { events_order } from 'constants/events';
import { sort } from 'src/shared/ObjectUtils';
import { UserPackageAPI } from '../../../service/UserPackageAPI';

export default function AddressForm() {
  const [eventDate, setEventDate] = useState(dayjs(moment()));
  const [quotationDate, setQuotationDate] = useState(dayjs(moment()));
  const [quotationValidity, setQuotationValidity] = useState(
    dayjs(moment().add(1, 'M'))
  );
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState('');
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const { logOut } = React.useContext(AuthContext);
  const [events, setEvents] = useState(clone(sort(all_events['duel'], events_order)));
  const [packages, setPackages] = useState([]);
  const [packageBooked, setPackageBooked] = useState();
  const [defaultPackages, setDefaultPackages] = useState([]);
  const [packageType, setPackageType] = useState('duel');
  const [defaultEvents, setDefaultEvents] = useState([]);
  const [oldData, setOldData] = useState();

  const uId = location.state?.id;

  const fetchUserData = async () => {
    try {
      var data = event_default_values;
      var pcks = [];
      const defPacks = await getProperties('packages');
        setDefaultPackages(defPacks);
      setLoading(true);
      if (uId) {
        const d = await UserPackageAPI.getPackageById(uId);

        // const docSnap = await getDoc(doc(db, 'stories', uId));

        if (d) {
          // const d = docSnap.data();
          setOldData(d);
          setDates(d);
          const packageType = d['package_type'] ?? 'duel';
          const ev = _.map(clone(all_events[packageType]), (e) => {
            const cp = _.find(d['events'], { name: e.name });
            return cp ? { ...e, ...cp, status: true } : e;
          });
          data = { ...d };
          _.forIn(d, (v, k) => {
            setValue(k, v);
          });
          pcks = d['packages'];
          setPackageBooked(d['package_booked']);
          const sortedEv = sort(ev, events_order);
          setEvents(sortedEv);
        } else {
          //No User found in DB
        }
      }

      // const p = await getProperties("packages");
      // console.log(JSON.stringify(p))

      // p.forEach(async (e,k) => {
      //   console.log(e,k)
      // await updateProperties("packages", p)

      // })
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

  const setDates = (d, db = 'mongo') => {
    const date = d?.wedding_date;
    const qDate = d?.packages?.quotation?.date;
    const vDate = d?.packages?.quotation?.validity;
    if (date) setEventDate(dayjs(db == 'mongo' ? date : date.toDate()));
    if (qDate) setQuotationDate(dayjs(db == 'mongo' ? qDate : qDate.toDate()));
    if (vDate)
      setQuotationValidity(dayjs(db == 'mongo' ? vDate : vDate.toDate()));
  };

  const { register, handleSubmit, reset, control, getValues, setValue } =
    useForm({ defaultValues: event_default_values });

  const setFormData = async () => {
    // const d = await fetchUserData();
    // if (d) {
    //   _.forIn(d, (v, k) => {
    //     setValue(k, v);
    //   });
    // }
  };

  useEffect(() => {
    // if (location.state?.id) {
    //   setFormData();
    // }
    fetchUserData();
  }, [location.state]);

  const onSubmit = async (data) => {
    const { groom_name, bride_name, customer_email, customer_contact } = data;
    try {
      setLoading(true);
      const newUId = (
        uId ?? generateUId(groom_name, bride_name, eventDate.format('DDMMYYYY'))
      ).toLowerCase();
      const evs = clone(events);
      var ev = await refactorEvents(newUId, evs);
      var pcks = await composePackage(ev, data);
      if (!customer_contact) delete data['customer_contact'];
      if (!customer_email) delete data['customer_email'];
      data['uid'] = newUId;
      data['packages'] = pcks;
      data['events'] = ev;
      data['wedding_date'] = eventDate.toDate();
      delete data['_id'];
      // const docId = doc(db, 'stories', newUId);
      // const docSnap = await getDoc(docId);
      if (coverPhoto) {
        const url = await uploadFile(newUId, coverPhoto, 'asset/cover_photo');
        data['cover_photo'] = url;
      }
      if (uId === newUId && oldData) {
        data['status'] = 'Package Updated';
        await UserPackageAPI.update(newUId, data);
        const existingEvents = oldData.events;
        ev = _.difference(ev, existingEvents);
      } else {
        data['status'] = 'Package Created';
        await UserPackageAPI.create(data);
      }
      createStorage(newUId, ev);
      reset();
      setLoading(false);
      navigate('/admin', { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
      // setErrMessage(err);
      // setShowSnackBar(true);
    }
  };

  const refactorEvents = async (uId, ev) => {
    var e = _.filter(ev, ['status', true]);
    for (let i = 0; i < e?.length; i++) {
      if (e[i]?.image) {
        const dUrl = await uploadFile(
          uId,
          e[i]?.image,
          'asset/' + e[i]?.name?.toLowerCase().replace(/ +/g, '_')
        );
        e[i]['cover_photo'] = dUrl;
      }
      delete e[i]?.status;
      delete e[i]?.image;
    }
    return e;
  };

  const handlePackageInputChange = (p, k, v) => {
    packages[p][k] = v;
    setPackages({ ...packages });
  };

  const handlePackageType = (v) => {
    setPackageType(v);
    setPackages(defaultPackages[v]);
    setEvents(sort(clone(all_events[v]),events_order));
    setRefresh(!refresh);
  };

  const composePackage = async (ev, d) => {
    var pck = clone(packages);
    const evKeys = _.map(ev, (o) => o.id);
    package_variants.forEach((v, i) => {
      pck[v]['payment_terms'] = composePaymentTerms(v, evKeys);
    });
    pck['quotation'] = {
      date: quotationDate.toDate(),
      validity: quotationValidity.toDate(),
    };
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
      <CFAppBar
        title={`${uId ? 'Update' : 'Add'} client`}
        handleLogout={handleLogout}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          padding: '20px 5%',
          gap: { xs: 5, md: 'none' },
        }}
      >
        {/* <Fab variant="extended" size="small" color="primary" >
        Extended
      </Fab> */}
        <React.Fragment>
          <form onSubmit={handleSubmit}>
            <GroomDetails control={control} register={register} />
            <Divider
              style={{ width: '100%', marginTop: 24, marginBottom: 24 }}
            />
            <BrideDetails control={control} register={register} />
            <Divider
              style={{ width: '100%', marginTop: 24, marginBottom: 24 }}
            />

            <WeddingDetails
              control={control}
              register={register}
              eventDate={eventDate}
              setEventDate={setEventDate}
            />
            <Divider
              style={{ width: '100%', marginTop: 24, marginBottom: 24 }}
            />

            
            {packageType && (
              <Grid>
                <Grid container spacing={3}>
                  <ClientEvents
                    events={events}
                    pcks={packages}
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
              control={control}
              packages={packages}
              packageBooked={packageBooked}
              setPackages={setPackages}
              onPackageChange={handlePackageInputChange}
              packageType={packageType}
              setPackageType={(v) => handlePackageType(v)}
              register={register}
              quotationDate={quotationDate}
              setQuotationDate={setQuotationDate}
              quotationValidity={quotationValidity}
              setQuotationValidity={setQuotationValidity}
            />
            
            <DirectionAndCover
              control={control}
              register={register}
              coverPhoto
              setCoverPhoto
            />
            <Divider style={{ width: '100%' }} />

            <Grid
              container
              spacing={12}
              justifyContent="center"
              padding="24px 0"
            >
              <FormGrid size={{ xs: 12, md: 3 }}>
                <Button onClick={reset} variant="outlined">
                  Clear all
                </Button>
              </FormGrid>
              <FormGrid size={{ xs: 12, md: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit(onSubmit)}
                >
                  {uId ? 'Update' : 'Save'}
                </Button>
              </FormGrid>
            </Grid>
          </form>
          {loading && <Loader />}
        </React.Fragment>
      </Box>
      <ErrorSnackBar
        message={errMessage}
        open={showSnackBar}
        setOpen={setShowSnackBar}
      />
    </div>
  );
}
