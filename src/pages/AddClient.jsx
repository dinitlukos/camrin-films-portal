import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/ArrowBack";
import { Box, styled } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import dayjs, { Dayjs } from "dayjs";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { FormInputText } from "../components/FormInputText";
import Loader from "./Loader";
import { db } from "../firebase";
import _ from "lodash";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Typography,
} from "@mui/material";
import ReadMeFie from "../assets/readme.txt";
import Image from "@mui/icons-material/Image";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function AddressForm() {
  const [eventDate, setEventDate] = useState(dayjs(moment()));
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logOut } = React.useContext(AuthContext);

  const allEvents = [
    {
      name: "Wedding",
      status: false,
      image: null,
    },
    {
      name: "Wedding Eve",
      status: false,
      image: null,
    },
    {
      name: "Engagement",
      status: false,
      image: null,
    },
    {
      name: "Reception",
      status: false,
      image: null,
    },
    {
      name: "Save the Date",
      status: false,
      image: null,
    },
    {
      name: "Pre Wedding Reception",
      status: false,
      image: null,
    },
    {
      name: "Post Wedding",
      status: false,
      image: null,
    },
    {
      name: "Haldi",
      status: false,
      image: null,
    },
    {
      name: "Mehandi",
      status: false,
      image: null,
    },
    {
      name: "Sangeeth",
      status: false,
      image: null,
    },
    {
      name: "Dekahina",
      status: false,
      image: null,
    },
  ];
  const [events, setEvents] = useState(allEvents);
  const defaultValues = {
    groom_name: "",
    groom_father_name: "",
    groom_mother_name: "",
    groom_address: "",
    bride_name: "",
    bride_father_name: "",
    bride_mother_name: "",
    bride_address: "",
    guest_contact: "",
    wedding_time: "",
    wedding_location: "",
    wedding_direction: "",
  };

  const fetchUserData = async () => {
    try {
      if (location.state?.id) {
        setLoading(true);
        const docSnap = await getDoc(doc(db, "stories", location.state?.id));
        if (docSnap.exists()) {
          const date = docSnap.data()["wedding_date"];
          setEventDate(dayjs(date.toDate()));
          const ev = _.map(allEvents, (e) => {
            var t = { ...e };
            const cp = _.find(docSnap.data()["events"], { name: e.name });
            if (cp) {
              if (cp?.cover_photo) t["cover_photo"] = cp?.cover_photo;
              t.status = true;
            }
            return t;
          });
          setEvents(ev);
          setLoading(false);
          return docSnap.data();
        } else {
          setLoading(false);
        }
      } else {
        return defaultValues;
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset, control, setValue } = useForm({
    defaultValues: async () => await fetchUserData(),
  });

  const handleFileUpload = (e) => {
    setCoverPhoto(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    const {
      groom_name,
      groom_father_name,
      groom_mother_name,
      groom_address,
      bride_name,
      bride_father_name,
      bride_mother_name,
      bride_address,
      guest_contact,
      wedding_time,
      wedding_location,
      wedding_direction,
    } = data;
    try {
      setLoading(true);
      const uId =
        groom_name?.replace(/ +/g, "")?.substring(0, 3) +
        "_" +
        bride_name?.replace(/ +/g, "")?.substring(0, 3) +
        "_" +
        eventDate.format("DDMMYY");
      var ev = await refactorEvents(uId.toLowerCase(), events);
      data["events"] = ev;
      data["wedding_date"] = eventDate.toDate();
      const docId = doc(db, "stories", uId.toLowerCase());
      const docSnap = await getDoc(docId);
      if (coverPhoto) {
        const url = await uploadFile(
          uId.toLowerCase(),
          coverPhoto,
          "asset/cover_photo"
        );
        data["cover_photo"] = url;
      }
      if (docSnap.exists()) {
        await updateDoc(docId, data);
        const existingEvents = docSnap.data()?.events;
        ev = _.difference(ev, existingEvents);
      } else {
        await setDoc(docId, data);
      }
      createStorage(uId.toLowerCase(), ev);
      reset();
      setLoading(false);
      navigate("/admin", { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const uploadFile = async (uId, f, path) => {
    const fileExtension = f?.name?.split(".")[1];
    const storage = getStorage();
    const storageRef = ref(storage, uId + "/" + path + "." + fileExtension);
    await uploadBytes(storageRef, f);
    const donwloadUrl = await getDownloadURL(storageRef);
    return donwloadUrl;
  };

  const refactorEvents = async (uId, ev) => {
    var e = _.filter(ev, ["status", true]);
    for (let i = 0; i < e?.length; i++) {
      if (e[i]?.image) {
        const dUrl = await uploadFile(
          uId,
          e[i]?.image,
          "asset/" + e[i]?.name?.toLowerCase().replace(/ +/g, "_")
        );
        e[i]["cover_photo"] = dUrl;
      }
      delete e[i]?.status;
      delete e[i]?.image;
    }
    return e;
  };

  const createStorage = async (uId, selectedEvents) => {
    const storage = getStorage();
    for (let i = 0; i < selectedEvents?.length; i++) {
      const el = selectedEvents[i]?.name;
      const storageRef = ref(
        storage,
        uId + "/" + el?.replace(/ +/g, "_").toLowerCase() + "/" + "readme.txt"
      );
      await uploadBytes(storageRef, ReadMeFie);
    }
  };

  const handleEventStatus = (i) => {
    {
      var o = events;
      if (o[i].status) o[i].image = null;
      o[i].status = !o[i].status;
      setEvents(o);
      setRefresh((refresh) => !refresh);
    }
  };

  const handleEventImageUpload = (e, i) => {
    {
      var o = events;
      o[i].image = e.target.files[0];
      setEvents(o);
      setRefresh((refresh) => !refresh);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBack = () => {
    navigate("/admin", { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = async () => {
    try {
      setLoading(true);
      const res = await logOut();
      console.log(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleBack}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add clients to the portal
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          padding: "20px 5%",
          gap: { xs: 5, md: "none" },
        }}
      >
        <React.Fragment>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} marginBottom="12px">
              <Typography fontWeight="bold">Groom Details</Typography>
            </Grid>
            <Grid container spacing={3}>
              <FormInputText
                name="groom_name"
                control={control}
                label="Groom Name"
                inputRef={{ ...register("groom_name", { required: true }) }}
              />
              <FormInputText
                name="groom_father_name"
                control={control}
                label="Groom Father Name"
                inputRef={{
                  ...register("groom_father_name", { required: true }),
                }}
              />
              <FormInputText
                name="groom_mother_name"
                control={control}
                label="Groom Mother Name"
                inputRef={{
                  ...register("groom_mother_name", { required: true }),
                }}
              />
              <FormInputText
                name="groom_address"
                control={control}
                label="Groom Address"
                inputRef={{ ...register("groom_address", { required: true }) }}
              />
            </Grid>
            <Grid container spacing={3} marginBottom="12px">
              <Divider style={{ width: "100%", marginTop: 24 }} />
              <Typography fontWeight="bold">Bride Details</Typography>
            </Grid>
            <Grid container spacing={3}>
              <FormInputText
                name="bride_name"
                control={control}
                label="Bride Name"
                inputRef={{ ...register("bride_name", { required: true }) }}
              />
              <FormInputText
                name="bride_father_name"
                control={control}
                label="Bride Father Name"
                inputRef={{
                  ...register("bride_father_name", { required: true }),
                }}
              />
              <FormInputText
                name="bride_mother_name"
                control={control}
                label="Bride Mother Name"
                inputRef={{
                  ...register("bride_mother_name", { required: true }),
                }}
              />
              <FormInputText
                name="bride_address"
                control={control}
                label="Bride Address"
                inputRef={{ ...register("bride_address", { required: true }) }}
              />
            </Grid>
            <Grid container spacing={3} marginBottom="12px">
              <Divider style={{ width: "100%", marginTop: 24 }} />
              <Typography fontWeight="bold">Wedding Details</Typography>
            </Grid>
            <Grid container spacing={3}>
              <FormInputText
                name="guest_contact"
                control={control}
                label="Guest Contact Number"
                message="Invalid Phone Number"
                inputRef={{
                  ...register("guest_contact", {
                    required: true,
                    pattern: `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`,
                  }),
                }}
              />
              <FormInputText
                name="wedding_location"
                control={control}
                label="Wedding Location"
                placeholder="Auditorium or Church/Temple name"
                inputRef={{
                  ...register("wedding_location", { required: true }),
                }}
              />
              {/* <FormInputDate
              label="Wedding Date"
              control={control}
              name="wedding_date"
              // inputRef={{
              //   ...register("wedding_date", {
              //     required: true,
              //   }),
              // }}
            /> */}
              <FormGrid size={{ xs: 12, md: 6 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disablePast
                    label="Wedding Date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e)}
                  />
                </LocalizationProvider>
              </FormGrid>

              <FormInputText
                name="wedding_time"
                control={control}
                label="Wedding Time"
                size="medium"
                placeholder="11:05 am to 11.45 am / 10.00 am"
                inputRef={{ ...register("wedding_time", { required: true }) }}
              />

              <Divider style={{ width: "100%" }} />
              <Typography fontWeight="bold">Events</Typography>
              <Grid
                container
                style={{ width: "100%", marginBottom: "12px" }}
                direction="column"
              >
                {events.map((v, i) => (
                  <Grid key={i} container direction="row">
                    <Grid>
                      <FormControlLabel
                        label={v.name}
                        control={
                          <Checkbox
                            checked={v.status}
                            onChange={() => handleEventStatus(i)}
                          />
                        }
                      />
                    </Grid>
                    <Grid>
                      {v.status && (
                        <Button
                          variant="outlined"
                          size="small"
                          component="label"
                        >
                          Upload Cover Image
                          <input
                            type="file"
                            hidden
                            onChange={(e) => handleEventImageUpload(e, i)}
                            accept=".png, .jpg, .jpeg"
                          />
                        </Button>
                      )}
                    </Grid>
                    <Grid>
                      <FormHelperText style={{ color: "green" }}>
                        {v?.image?.name}
                      </FormHelperText>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Divider style={{ width: "100%" }} />
            <Typography fontWeight="bold" style={{ margin: "24px 0" }}>
              Direction & Cover Photo
            </Typography>
            <Grid container spacing={3}>
              <FormGrid size={{ xs: 12, md: 6 }}>
                <Grid container direction="row" alignItems="center" spacing={6}>
                  <Typography>Wedding google map location</Typography>
                  <FormInputText
                    name="wedding_direction"
                    control={control}
                    label="Direction"
                    placeholder="Loaction from google map"
                    inputRef={{ ...register("wedding_direction") }}
                  />
                </Grid>
              </FormGrid>
              <FormGrid size={{ xs: 12, md: 6 }}>
                <Grid container direction="row" alignItems="center" spacing={6}>
                  <Typography>Wedding invite cover photo</Typography>
                  <Button
                    variant="outlined"
                    startIcon={<Image />}
                    component="label"
                  >
                    Upload Image File
                    <input
                      type="file"
                      hidden
                      onChange={handleFileUpload}
                      accept=".png, .jpg, .jpeg"
                    />
                  </Button>
                  {coverPhoto && (
                    <FormHelperText style={{ color: "green" }}>
                      {coverPhoto?.name}
                    </FormHelperText>
                  )}
                </Grid>
              </FormGrid>
              <FormGrid size={{ xs: 12, md: 6 }}></FormGrid>
            </Grid>
            <Divider style={{ width: "100%", marginBottom: "24px" }} />
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
                  Submit
                </Button>
              </FormGrid>
            </Grid>
          </form>
          {loading && <Loader />}
        </React.Fragment>
      </Box>
    </div>
  );
}
