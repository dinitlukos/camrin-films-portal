import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GallaryImages } from '../../constants/gallaryImages';
import { useTheme } from '@mui/material';
import LightGallery from 'lightgallery/react';
import { useCallback } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'src/firebase';
import _ from 'lodash';

function NextArrow(props) {
  const { className, style, onClick } = props;
  const theme = useTheme();
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: theme.palette.primary.main,
        borderRadius: '10px',
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  const theme = useTheme();
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: theme.palette.primary.main,
        borderRadius: '10px',
      }}
      onClick={onClick}
    />
  );
}

const GallarySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 3,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const containerRef = useRef(null);
  const [galleryContainer, setGalleryContainer] = useState(null);
  const [images, setImages] = useState([]);

  const theme = useTheme();

  const onInit = useCallback((detail) => {
    if (detail) {
      // lightGalleryRef.current = detail.instance;
      detail.instance.openGallery();
    }
  }, []);

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
        setImages(sl);
        // setLoading(false);
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
    // fetchGallery();
    // if (containerRef.current) {
    //   setGalleryContainer('aaa');
    // }
  }, []);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {GallaryImages.map((v, k) => (
          <div key={k} style={{ height: '350px' }}>
            <img key={k} src={v.src} style={{height:'350px'}}/>
          </div>
        ))}
      </Slider>
      {/* <div
        style={{
          height: `calc(60vh - ${theme.spacing(8)})`,
        }}
        ref={containerRef}
      ></div>
      <LightGallery
        container={containerRef.current}
        backgroundColor="#888"
        onInit={onInit}
        download={false}
        slideShowAutoplay={true}
        dynamic={true}
        dynamicEl={images}
        closable={false}
        showMaximizeIcon={true}
        slideDelay={400}
        thumbWidth={130}
        thumbHeight={'100px'}
        thumbMargin={6}
        appendSubHtmlTo={'.lg-item'}
      ></LightGallery> */}
    </div>
  );
};

export default GallarySlider;
