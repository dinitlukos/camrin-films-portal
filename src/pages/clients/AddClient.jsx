import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/ArrowBack";
import Image from "@mui/icons-material/Image";
import { Divider, FormHelperText, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import _ from "lodash";
import moment from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import ReadMeFie from "../../assets/readme.txt";
import { AuthContext } from "../../auth/AuthProvider";
import FormGrid from "../../components/FormGrid";
import { FormInputText } from "../../components/FormInputText";
import { all_events, event_default_values } from "../../constants/events";
import { db } from "../../firebase";
import Loader from "../Loader";
import BrideDetails from "./BrideDetails";
import ClientEvents from "./ClientEvents";
import ClientPackages from "./ClientPackages";
import GroomDetails from "./GroomDetails";
import ErrorSnackBar from "../../components/ErrorSnackBar";
import WeddingDetails from "./WeddingDetails";
import composePaymentTerms from "../../shared/payment";
import { clone } from "../../shared/StringUtils";
import { getProperties } from "./ClientService";
import { package_variants } from "../../constants/packages";

export default function AddressForm() {
  const [eventDate, setEventDate] = useState(dayjs(moment()));
  const [quotationDate, setQuotationDate] = useState(dayjs(moment()));
  const [quotationValidity, setQuotationValidity] = useState(
    dayjs(moment().add(1, "M"))
  );
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState("");
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { logOut } = React.useContext(AuthContext);
  const [events, setEvents] = useState(all_events);
  const [packages, setPackages] = useState([]);
  const [defaultPackages, setDefaultPackages] = useState([]);
  const [defaultEvents, setDefaultEvents] = useState([]);

  const fetchUserData = async () => {
    try {
      var data = event_default_values;
      setLoading(true);
      if (location.state?.id) {
        const docSnap = await getDoc(doc(db, "stories", location.state?.id));
        if (docSnap.exists()) {
          const d = docSnap.data();
          setDates(d);
          const ev = _.map(clone(all_events), (e) => {
            const cp = _.find(docSnap.data()["events"], { name: e.name });
            return cp ? { ...e, ...cp, status: true } : e;
          });
          setPackages(d["packages"]);
          setEvents(ev);
          data = d;
        } else {
          //No User found in DB
        }
      }
      if (packages.length <= 0) {
        const defPacks = await getProperties("packages");
        setPackages(defPacks);
      }
      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
    }
  };

  const setDates = (d) => {
    const date = d?.wedding_date;
    const qDate = d?.packages?.quotation?.date;
    const qVDate = d?.packages?.quotation?.validity;
    setEventDate(dayjs(date.toDate()));
    setQuotationDate(dayjs(qDate.toDate()));
    setQuotationValidity(dayjs(qVDate.toDate()));
  };

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: async () => await fetchUserData(),
  });

  const handleFileUpload = (e) => {
    setCoverPhoto(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    const { groom_name, bride_name } = data;
    try {
      setLoading(true);
      const uId =
        groom_name?.replace(/ +/g, "")?.substring(0, 3) +
        "_" +
        bride_name?.replace(/ +/g, "")?.substring(0, 3) +
        "_" +
        eventDate.format("DDMMYY");
      const evs = clone(events);
      var ev = await refactorEvents(uId.toLowerCase(), evs);
      var pcks = await composePackage(ev, data);
      delete data?.gold_package_price;
      delete data?.diamond_package_price;
      data["uid"] = uId.toLowerCase();
      data["packages"] = pcks;
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
        // ev = _.difference(ev, existingEvents);
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
      // setErrMessage(err);
      // setShowSnackBar(true);
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

  const handlePackageInputChange = (p, k, v) => {
    packages[p][k] = v;
    setPackages({ ...packages });
  };

  const composePackage = async (ev, d) => {
    var pck = clone(packages);
    const evKeys = _.map(ev, (o) => o.id);
    package_variants.forEach((v, i) => {
      pck[v]["payment_terms"] = composePaymentTerms(v, evKeys);
    });
    pck["quotation"] = {
      date: quotationDate.toDate(),
      validity: quotationValidity.toDate(),
    };
    return pck;
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
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrMessage(err);
      setShowSnackBar(true);
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
            <GroomDetails control={control} register={register} />
            <Divider
              style={{ width: "100%", marginTop: 24, marginBottom: 24 }}
            />
            <BrideDetails control={control} register={register} />
            <Divider
              style={{ width: "100%", marginTop: 24, marginBottom: 24 }}
            />

            <WeddingDetails
              control={control}
              register={register}
              eventDate={eventDate}
              setEventDate={setEventDate}
            />
            <Divider
              style={{ width: "100%", marginTop: 24, marginBottom: 24 }}
            />

            <Grid container spacing={3}>
              <ClientEvents
                events={events}
                pcks={packages}
                defPacks={defaultPackages}
                setEvents={setEvents}
                setRefresh={setRefresh}
              />
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
            <Divider style={{ width: "100%" }} />
            <ClientPackages
              control={control}
              packages={packages}
              onPackageChange={handlePackageInputChange}
              register={register}
              defPacks={defaultPackages}
              quotationDate={quotationDate}
              setQuotationDate={setQuotationDate}
              quotationValidity={quotationValidity}
              setQuotationValidity={setQuotationValidity}
            />
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
      <ErrorSnackBar
        message={errMessage}
        open={showSnackBar}
        setOpen={setShowSnackBar}
      />
    </div>
  );
}
