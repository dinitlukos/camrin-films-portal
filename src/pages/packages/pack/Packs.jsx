import Grid from "@mui/material/Grid2";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import Loader from "../../Loader";

import { Typography } from "@mui/material";
import ClientDetails from "./ClientDetails";
import PackageType from "./PackageType";
import ServiceFailure from "./ServiceFailure";
import Terms from "./Terms";


const Packs = () => {
  const [loading, setLoading] = React.useState(0);

  const [data, setData] = useState();

  const packages = {
    classic: {
      description:
        "A budget friendly package design to capture the key highs of your special day",
      offer: "Complementory Pre/Post wedding",
      price: "200000",
      deliverables: [
        {
          title: "Photograph & Soft Copies",
          items: ["All unprocessed primary soft copies", "Edited 100 images"],
        },
        {
          title: "Album",
        },
      ],
      events: [
        {
          title: "Wedding Eve",
          services: [
            "One fuctional photographer",
            "One fuctional videographer",
          ],
        },
        {
          title: "Engagement",
          services: [
            "One fuctional photographer",
            "One fuctional videographer",
            "One candid photographer",
            "One candid videographer",
          ],
        },
        {
          title: "Wedding",
          services: [
            "One fuctional photographer",
            "One fuctional videographer",
            "One candid photographer",
            "One candid videographer",
          ],
        },
      ],
    },
    premium: {
      description:
        "A budget friendly package design to capture the key highs of your special day",
      price: "500000",
      deliverables: [
        {
          title: "Photograph & Soft Copies",
          items: ["All unprocessed primary soft copies", "Edited 100 images"],
        },
        {
          title: "Album",
        },
      ],
      events: [
        {
          title: "Wedding Eve",
          services: [
            "One fuctional photographer",
            "One fuctional videographer",
            "One candid videographer",
          ],
        },
        {
          title: "Engagement",
          services: [
            "One fuctional photographer",
            "One fuctional videographer",
            "One candid photographer",
            "Two candid videographer",
            "One cinematic videographer",
          ],
        },
        {
          title: "Wedding",
          services: [
            "One fuctional photographer",
            "One fuctional videographer",
            "One candid photographer",
            "Two candid videographer",
            "One cinematic videographer",
          ],
        },
      ],
    },
  };

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

  return (
    <div>
      {data ? (
        <Grid container direction="column" spacing={2}>
          <ClientDetails data={data} />
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <PackageType pack={packages?.classic} title="Classic Package" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <PackageType
                pack={packages?.premium}
                variant="premium"
                title="Premium Package"
              />
            </Grid>
          </Grid>
          <Terms />
          <ServiceFailure />
        </Grid>
      ) : (
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
      )}
    </div>
  );
};

export default Packs;
