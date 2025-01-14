import Grid from "@mui/material/Grid2";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import Loader from "../../Loader";

import { DownloadOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import ClientDetails from "./ClientDetails";
import PackageType from "./PackageType";
import ServiceFailure from "./ServiceFailure";
import Terms from "./Terms";
import ImportantNotes from "./ImportantNotes";
import AddOns from "./Addons";
import Payment from "./Payment";
import Watermark from "../../../components/Watermark";
import DateSlider from "./DateSlider";
import Highlights from "./Highlights";
import { package_variants } from "../../../constants/packages";

const Packs = ({ printRef }) => {
  const [loading, setLoading] = React.useState(0);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    copyShadowRoots: true,
    ignoreGlobalStyles: false,
  });

  const [data, setData] = useState();

  const { storyId } = useParams();

  const fetchStoryData = async (sId) => {
    setLoading(true);
    try {
      const docSnap = await getDoc(doc(db, "stories", sId));
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        // navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error fetching story data:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStoryData(storyId);
  }, [storyId]);

  if (loading) {
    return <Loader />;
  }

  if (!loading && !data) {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        style={{
          background: "linear-gradient(180deg, #841042 0%, #CD3339 100%)",
          height: "300px",
          borderRadius: 25,
          color: "#fff",
        }}
      >
        <Typography>
          Thanks for the patience! We are working on your package.
        </Typography>
        <Typography>We will get back to you soon...</Typography>
      </Grid>
    );
  }

  return (
    <>
      <div>
        <Grid container direction="column" spacing={2}>
          {data && <ClientDetails data={data} />}
          <Highlights />
          <Grid container spacing={4} direction="row">
            {package_variants.map((v, k) => {
              return data?.packages[v] ? (
                <Grid size={{ xs: 12, md: 6 }} key={k}>
                  <PackageType pack={data?.packages[v]} events={data?.events} variant={v} />
                </Grid>
              ) : (
                <Grid key={k}/>
              );
            })}
          </Grid>
          <Payment />
          <AddOns />
          <ImportantNotes />
          <Terms />
          <ServiceFailure />
        </Grid>
      </div>
      <IconButton
        aria-label="delete"
        style={{
          position: "absolute",
          right: 20,
          top: 20,
          color: "#000",
        }}
        onClick={handlePrint}
      >
        <DownloadOutlined />
      </IconButton>
    </>
  );
};

export default Packs;
