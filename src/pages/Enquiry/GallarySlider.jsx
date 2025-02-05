import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GallaryImages } from '../../constants/gallaryImages';
import { useTheme } from '@mui/material';

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
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {GallaryImages.map((v, k) => (
          <div key={k} style={{ height: '350px' }}>
            <img key={k} src={v.src} style={{height:'350px'}}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallarySlider;
