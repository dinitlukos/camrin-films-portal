import Grid from '@mui/material/Grid2';
import Loader from 'components/Loader';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from 'src/firebase';

import { Construction, DownloadOutlined } from '@mui/icons-material';
import { alpha, IconButton, Typography, useTheme } from '@mui/material';
import { package_variants } from 'constants/packages';
import { useReactToPrint } from 'react-to-print';
import { clone } from 'src/shared/StringUtils';
import AddOns from './Addons';
import ClientDetails from './ClientDetails';
import Highlights from './Highlights';
import ImportantNotes from './ImportantNotes';
import PackageType from './PackageType';
import Payment from './Payment';
import ServiceFailure from './ServiceFailure';
import Terms from './Terms';
import { UserPackageAPI } from '../../../service/UserPackageAPI';


const Packs = ({ printRef }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    copyShadowRoots: true,
    ignoreGlobalStyles: false,
  });

  const [data, setData] = useState();

  const { storyId } = useParams();

  const fetchStoryData = async (cfId) => {
    setLoading(true);
    try {
      const d = await UserPackageAPI.getPackageById(cfId)
      // const docSnap = await getDoc(doc(db, 'stories', sId));
      if (d) {
        setData(d);
      } else {
        // navigate("/", { replace: true });
      }
    } catch (error) {
      console.error('Error fetching story data:', error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStoryData(storyId);
  }, [storyId]);

  const sortedPackages = () => {
    const pck = data.package_suggestions ?? package_variants;
    const sortedPck = clone(package_variants).filter((v) => pck.includes(v));
    return sortedPck ?? [];
  };

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
        sx={{
          height: '60vh',
        }}
      >
        <Grid
          alignItems="center"
          container
          direction="column"
          sx={{ background: alpha('#fff', 0.8), p: 5, borderRadius: 5 }}
        >
          <Construction
            color="primary"
            sx={{ height: '100px', width: '100px' }}
          />
          <Typography variant="h6">
            Thanks for the patience! We are working on your packages.
          </Typography>
          <Typography>We will get back to you soon...</Typography>
        </Grid>
      </Grid>
    );
  }

  const directPackage = () => {
    const v = data?.package_booked;
    if (v) {
      return (
        <Grid
          size={{
            xs: 12,
            md: 12,
            lg: 8,
          }}
        >
          <PackageType
            pack={data?.packages[v]}
            size={1}
            events={data?.events}
            variant={v}
          />
        </Grid>
      );
    }
    return sortedPackages().map((v, k) => {
      if (data?.packages[v]) {
        const size = sortedPackages().length;
        return (
          <Grid
            size={{
              xs: 12,
              md: size == 1 ? 12 : 6,
              lg: size == 1 ? 8 : 6,
            }}
            key={k}
          >
            <PackageType
              pack={data?.packages[v]}
              size={size}
              events={data?.events}
              variant={v}
            />
          </Grid>
        );
      }
    });
  };

  return (
    <>
      <div>
        <Grid container direction="column" spacing={2}>
          {data && <ClientDetails data={data} />}
          <Grid container spacing={4} direction="row" justifyContent="center">
            {directPackage()}
          </Grid>
          <Highlights />
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
          position: 'absolute',
          right: 20,
          top: 20,
          color: '#000',
        }}
        onClick={handlePrint}
      >
        <DownloadOutlined />
      </IconButton>
    </>
  );
};

export default Packs;
