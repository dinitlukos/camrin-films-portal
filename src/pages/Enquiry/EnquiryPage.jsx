import homeBg from 'assets/bg_doodle.png';
import React, { useRef, useState } from 'react';
import './EnquiryPage.css';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import FormGrid from 'components/FormGrid';
import { FormInputPhone } from 'components/FormInputPhone';
import { FormInputRadioGroup } from 'components/FormInputRadioGroup';
import { FormInputSelect } from 'components/FormInputSelect';
import { FormInputText } from 'components/FormInputText';
import { useForm } from 'react-hook-form';
import whatsappimage from 'assets/whatsapp.webp';
import Loader from 'components/Loader';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import circleWhite from 'assets/packages/cf_circle_white.png';
import logoWhite from 'assets/packages/cf_logo_white.png';
import Spiral from 'assets/packages/spiral.svg';
import { generateUId } from 'src/shared/StringUtils';

import LogoContainer from 'components/LogoContainer';
import { locations } from 'constants/locations';
import GallarySlider from './GallarySlider';

import dayjs from 'dayjs';
import moment from 'moment';
import { EnquiryAPI } from '../../service/EnquiryAPI';
import { sendWhatsappEnquiry } from 'src/service/whatsapp';
import { toast, ToastContainer } from 'react-toastify';
import _ from 'lodash';

const EnquiryPage = () => {
  const formContainerRef = useRef(null);

  const { register, handleSubmit, reset, control, getValues, setValue } =
    useForm({
      defaultValues: {
        groom_name: '',
        bride_name: '',
        contact_number: '',
        contact_email: '',
        package_type: 'Bride and Groom',
        engagement_location: '',
        wedding_location: '',
        notes: '',
      },
    });

  const [wedDate, setWedDate] = useState(dayjs(moment()));
  const [engDate, setEngDate] = useState(dayjs(moment()));
  const [refresh, setRefresh] = useState(false);
  const [eng, setEng] = useState(false);
  const [wed, setWed] = useState(true);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const [events, setEvents] = useState([
    {
      title: 'Wedding',
      status: true,
    },
    {
      title: 'Engagement',
      status: false,
    },
  ]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      var d = data;
      var events = [];
      if (eng) {
        events.push('Engagement');
        d['engagement_date'] = engDate;
      } else {
        delete d['engagement_location'];
      }
      if (wed) {
        events.push('Wedding');
        d['wedding_date'] = wedDate;
      } else {
        delete d['wedding_location'];
      }
      d['events'] = events.join(', ');
      d['uid'] = generateUId(
        d?.groom_name,
        d?.bride_name,
        wed ? wedDate.format('DDMMYYYY') : null
      );
      await EnquiryAPI.create(d);
      // const res = await sendWhatsappEnquiry(
      //   composeWhatsappMessage(d),
      //   d['uid']
      // );
      resetForm();
      toast.success('Thank You! Enquiry Send Successfully');
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const composeWhatsappMessage = (d) => {
    const fd = [
      {
        type: 'text',
        text: [
          _.isEmpty(d['groom_name']) ? 'Unknown' : d['groom_name'],
          _.isEmpty(d['bride_name']) ? 'Unknown' : d['bride_name'],
        ].join(' & '),
      },
      {
        type: 'text',
        text: _.isEmpty(d['contact_number'])
          ? 'No Contact Number'
          : d['contact_number'],
      },
      {
        type: 'text',
        text: _.isEmpty(d['contact_email']) ? 'No Email' : d['contact_email'],
      },
      {
        type: 'text',
        text: [d['package_type'] ?? '', d['events'] ?? 'No Events'].join(' | '),
      },
      {
        type: 'text',
        text: [
          wed ? wedDate.format('MM-DD-YYYY') : '',
          d['wedding_location'] ?? '',
        ].join(', '),
      },
      {
        type: 'text',
        text: [
          eng ? engDate.format('MM-DD-YYYY') : '',
          d['engagement_location'] ?? '',
        ].join(', '),
      },
      {
        type: 'text',
        text: _.isEmpty(d['notes']) ? 'No Notes' : d['notes'],
      },
    ];

    return fd;
  };

  const resetForm = () => {
    reset();
    setEng(false);
    setWed(true);
    setWedDate(dayjs(moment()));
    setEngDate(dayjs(moment()));
  };

  return (
    <Grid style={{ backgroundImage: `url(${homeBg})`, minHeight: '100vh' }}>
      <Grid
        container
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          // background: "#1d1d1d",
          background: theme.palette.primary.main,
          // backgroundImage: `url(${ashBg})`,
          width: '100vw',
          height: { xs: '', md: '40vh' },
        }}
      >
        <Grid
          container
          sx={{
            p: 2,

            backgroundImage:
              'repeating-linear-gradient(-45deg, rgba(184, 43, 60, 0.25), rgba(184, 43, 60, 0.25) 1px, transparent 1px, transparent 6px)',
            backgroundSize: '4px 4px',
          }}
          size={{ xs: 12, md: 5 }}
          justifyContent="center"
        >
          <Grid
            container
            sx={{ pt: 4 }}
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={Spiral}
              height="150px"
              weight="150px"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                rotate: '270deg',
              }}
            />
            {/* <Grid container> */}
            <LogoContainer circle={circleWhite} logo={logoWhite} />
            {/* <div style={{height:"1px",width:'100%', background:'#f6f6f6'}}></div> */}
            {/* <Box sx={{boxShadow:1, background: alpha("#fff", .8)}}> */}
            <Typography
              // padding="0 10%"
              textAlign="justify"
              fontSize=".9rem"
              color="#d8d8d8"
            >
              As producers of some of the finest wedding photography in India,
              we are there to fulfill a standard, not a time frame. We attend
              your wedding with one mission: To immortalize the most beautiful
              memories of you on the day you deserve most, and that cannot be
              achieved by simply clicking a shutter all day.
            </Typography>
            <Grid sx={{ height: { xs: '80px', md: 0 } }}></Grid>
            {/* </Box> */}
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          container
          justifyContent="center"
          sx={{ zIndex: 'modal', mt: { xs: -12, md: 0 } }}
          style={{ width: '100%' }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Grid
              sx={{ p: 4, mt: '40vh', display: { xs: 'none', md: 'block' } }}
            >
              <GallarySlider />
            </Grid>
          </Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ pt: { xs: 0, md: 6 }, position: 'relative' }}
          >
            {/* <Grid
              container
              sx={{
                background: '#ddd',
                position: 'absolute',
                // height:{get},
                // width:'100%',
                pt: { xs: 2, md: 6 },
                pb: 3,
                pl: { xs: 2, md: 6 },
                pr: { xs: 2, md: 6 },
                m: { xs: 2, md: 4 },
                borderRadius: 4,
                boxShadow: 2,
              }}
            ></Grid> */}
            <Box
              ref={formContainerRef}
              sx={{
                background: '#fff',
                pt: { xs: 2, md: 6 },
                pb: 3,
                pl: { xs: 2, md: 6 },
                pr: { xs: 2, md: 6 },
                m: { xs: 2, md: 4 },
                borderRadius: 4,
                boxShadow: 2,
              }}
            >
              <Typography
                variant="h5"
                color="primary"
                fontWeight="bold"
                textAlign="center"
              >
                Enquiry Form
              </Typography>
              <div style={{ height: '24px' }} />
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <FormInputText
                    name="groom_name"
                    control={control}
                    label="Groom Name"
                    containerSize={{ xs: 12, md: 6 }}
                    inputRef={{ ...register('groom_name') }}
                  />
                  <FormInputText
                    name="bride_name"
                    control={control}
                    label="Bride Name"
                    containerSize={{ xs: 12, md: 6 }}
                    inputRef={{ ...register('bride_name') }}
                  />
                  <FormInputPhone
                    name="contact_number"
                    control={control}
                    label="Contact Number"
                    message="Either a valid Phone number"
                    rules={{ required: true }}
                    inputRef={{
                      ...register('contact_number'),
                    }}
                  />
                  <FormInputText
                    name="contact_email"
                    control={control}
                    label="Email"
                    rules={{
                      patter: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    }}
                    message="Enter a valid email"
                    inputRef={{
                      ...register('contact_email'),
                    }}
                  />
                  <FormInputRadioGroup name="package_type" control={control} />
                  <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormControl>
                      <Typography color="primary">Events</Typography>
                      <Grid container spacing={1}>
                        <FormControlLabel
                          sx={{ color: '#000' }}
                          control={
                            <Checkbox
                              checked={eng}
                              onChange={(e) => setEng(e.target.checked)}
                            />
                          }
                          label="Engagement"
                        />
                        <FormControlLabel
                          sx={{ color: '#000' }}
                          control={
                            <Checkbox
                              checked={wed}
                              onChange={(e) => setWed(e.target.checked)}
                            />
                          }
                          label="Wedding"
                        />
                      </Grid>
                    </FormControl>
                  </FormGrid>
                  {eng && (
                    <FormGrid size={{ xs: 12, md: 6 }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          // disablePast
                          label="Engagement Date"
                          slotProps={{ textField: { size: 'small' } }}
                          value={engDate}
                          onChange={(e) => setEngDate(e)}
                        />
                      </LocalizationProvider>
                    </FormGrid>
                  )}
                  {eng && (
                    <FormInputSelect
                      name="engagement_location"
                      options={locations}
                      control={control}
                      placeholder="Engagement Location"
                      label="Engagement Location"
                      inputRef={{ ...register('engagement_location') }}
                    />
                  )}
                  {wed && (
                    <FormGrid size={{ xs: 12, md: 6 }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          // disablePast
                          label="Wedding Date"
                          slotProps={{ textField: { size: 'small' } }}
                          value={wedDate}
                          onChange={(e) => setWedDate(e)}
                        />
                      </LocalizationProvider>
                    </FormGrid>
                  )}
                  {wed && (
                    <FormInputSelect
                      name="wedding_location"
                      options={locations}
                      control={control}
                      placeholder="Wedding Location"
                      label="Wedding Location"
                      inputRef={{ ...register('wedding_location') }}
                    />
                  )}
                  <FormInputText
                    name="notes"
                    control={control}
                    label="Additional Notes"
                    containerSize={{ xs: 12, md: 12 }}
                    inputRef={{ ...register('notes') }}
                    multiline={true}
                    minRows={2}
                  />
                  <Grid
                    container
                    justifyContent="center"
                    sx={{ width: '100%' }}
                  >
                    <Button
                      type="submit"
                      size="small"
                      variant="contained"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Send Enquiry
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <div className="whatsapp-container">
        <a href="https://wa.me/919446288811" target="_blank">
          <img src={whatsappimage} />
        </a>
      </div>
      <ToastContainer position="bottom-center" />
      {loading && <Loader />}
    </Grid>
  );
};

export default EnquiryPage;
