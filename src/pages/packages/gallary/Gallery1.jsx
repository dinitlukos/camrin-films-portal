import Grid from '@mui/material/Grid2';
import React, { useEffect, useState } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'src/firebase';
import _ from 'lodash';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const Gallery1 = () => {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([]);
  const [photos, setPhotos] = useState([]);

  const addSrcSet = (d) => {
    const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
    return _.map(d, (e) => {
      var fD = {
        ...e,
      };
      fD['srcSet'] = breakpoints.map((breakpoint) => ({
        src: e['src'],
        width: breakpoint,
        height: Math.round((e['height'] / e['width']) * breakpoint),
      }));
      return fD;
    });
  };

  const fetchGallery = async () => {
    try {
      const docSnap = await getDoc(doc(db, 'storiesGallery', 'gallery'));
      if (docSnap.exists()) {
        const d = docSnap.data();
        const g = d['packages'];
        var ph = [];
        var sl = [];
        _.forIn(g, (v, k) => {
          ph.push(v['photos']);
          sl.push(v['slides']);
        });
        setPhotos(ph);
        setSlides(sl);
        setLoading(false);
      } else {
        // navigate("/", { replace: true });
      }
    } catch (error) {
      console.error('Error fetching story data:', error);
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <Grid>
      <MasonryPhotoAlbum
        lazyLoad={true}
        photos={photos}
        onClick={({ index }) => {
          return setIndex(index);
        }}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </Grid>
  );
};

export default Gallery1;
