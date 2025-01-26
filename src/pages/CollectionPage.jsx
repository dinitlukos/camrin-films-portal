import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { SlArrowDown } from "react-icons/sl";
import "./CollectionPage.css";
import _ from "lodash";
import logo from "assets/logo.png";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { db } from "src/firebase";
import { doc, getDoc } from "firebase/firestore";
import Loader from "components/Loader";
import { Typography } from "@mui/material";

const CollectionPage = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(-1);
  const [events, setEvents] = useState([]);
  const [cover, setCover] = useState({})
  const [slides, setSlides] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [value, setValue] = React.useState(0);
  const [name, setName] = useState("");

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  const addSrcSet = (d) => {
    const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
    return _.map(d, (e) => {
      var fD = {
        ...e,
      };
      fD["srcSet"] = breakpoints.map((breakpoint) => ({
        src: e["src"],
        width: breakpoint,
        height: Math.round((e["height"] / e["width"]) * breakpoint),
      }));
      return fD;
    });
  };

  const fetchCollectionData = async () => {
    setLoading(true);
    try {
      const docSnap = await getDoc(doc(db, "storiesGallery", storyId));
      if (docSnap.exists()) {
        const d = docSnap.data();
        const ev = Object.keys(d);
        var ph = {};
        var sl = {};
        _.forIn(d, (v, k) => {
          ph[k] = _.map(v, "photos");
          sl[k] = addSrcSet(_.map(v, "slides"));
        });
        setPhotos(ph);
        setSlides(sl);
        setEvents(ev);
        setLoading(false);
      } else {
        // navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error fetching story data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserInfo = async (sId) => {
    const docSnap = await getDoc(doc(db, "stories", sId));
    if (docSnap.exists()) {
      const d = docSnap.data();
      const gName = d["groom_name"].split(" ")[0];
      const bName = d["bride_name"].split(" ")[0];
      setName(bName + " & " + gName);
      const fe = _.filter(d["events"] ?? [], 'cover_photo')
      var e = {}
      for(let i = 0; i< fe.length; i++){
        e[fe[i]?.name.toLowerCase().replace(/ +/g, "_")] = fe[i]?.cover_photo
      }
      setCover(e)
    }
  };

  useEffect(() => {
    fetchCollectionData();
    fetchUserInfo(storyId);
  }, [storyId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) {
    return <Loader />;
  }

  if (events.length == 0) {
    return (
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Grid className="logo">
          <img src={logo} alt="Camrin Films Logo" />
        </Grid>
        <Typography>Camrin Films designing your Gallary</Typography>
      </Grid>
    );
  }

  return (
    <div className="collection-root">
      {events.length > 0 && (
        <div className="main">
          <div>
            <img
              src={cover[events[value]] ?? slides[events[value]][0]["src"]}
              alt="Camrin Films Logo"
              className="main-img"
            />
          </div>
          <div className="logo">
            <img src={logo} alt="Camrin Films Logo" />
          </div>
          <div className="title">{}</div>
          <div className="arrow-icon bounce">
            <SlArrowDown />
          </div>
        </div>
      )}

      <Box className="sticky" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          className="tab"
          onChange={handleChange}
          aria-label="gallary tabs"
        >
          {events.map((v, k) => (
            <Tab
              label={v.replace("_"," ")}
              key={k}
              className="tab-items"
              id={`simple-tab-${index}`}
              aria-controls={`simple-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </Box>

      {events.map((item, i) => (
        <div key={i}>
          <CustomTabPanel value={value} index={i}>
            <RowsPhotoAlbum
              photos={photos[item]}
              onClick={({ index }) => {
                return setIndex(index);
              }}
            />
            <Lightbox
              slides={slides[item]}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Download]}
            />
          </CustomTabPanel>
        </div>
      ))}
    </div>
  );
};

export default CollectionPage;
