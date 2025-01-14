import Grid from "@mui/material/Grid2";
import calendarImage from "../../../assets/calendar_primary.png";
import Slider from "react-slick";
import moment from 'moment'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "red" }}
        onClick={onClick}
      />
    );
  }
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

const DateSlider = ({ data }) => {
  const settings = {
    // dots: true,
    infinite: true,
    centerMode:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // centerPadding: "60px",
    autoplaySpeed: 300,
    rows:1,
    pauseOnHover: true,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>

    // vertical:false
  };
  return (
    <Grid container style={{width:'100%'}} justifyContent='center'>
        <div className="slider-container" style={{ width:'350px'}}>
      <Slider {...settings}>
        
      <div>
      <div>
          <div
            className="calendar-date"
            style={{
              backgroundImage: `url(${calendarImage})`,
              backgroundSize: "cover",
            }}
          >
            <div className="calendar-title">WEDDING</div>
            <div className="pack-calendar-day">
              {moment(data?.wedding_date?.toDate()).format("DD")}
            </div>
            <div style={{ color: "#000", fontSize: ".8rem" }}>
              {moment(data?.wedding_date?.toDate()).format("MMM yyyy")}
            </div>
          </div>
        </div>
        </div>
        <div>
        <div style={{width:'150px'}}>
          <div
            className="calendar-date"
            style={{
              backgroundImage: `url(${calendarImage})`,
              backgroundSize: "cover",
            }}
          >
            <div className="calendar-title">WEDDING</div>
            <div className="pack-calendar-day">
              {moment(data?.wedding_date?.toDate()).format("DD")}
            </div>
            <div style={{ color: "#000", fontSize: ".8rem" }}>
              {moment(data?.wedding_date?.toDate()).format("MMM yyyy")}
            </div>
          </div>
        </div>
        </div>
        <div>
        <div style={{width:'150px'}}>
          <div
            className="calendar-date"
            style={{
              backgroundImage: `url(${calendarImage})`,
              backgroundSize: "cover",
            }}
          >
            <div className="calendar-title">WEDDING</div>
            <div className="pack-calendar-day">
              {moment(data?.wedding_date?.toDate()).format("DD")}
            </div>
            <div style={{ color: "#000", fontSize: ".8rem" }}>
              {moment(data?.wedding_date?.toDate()).format("MMM yyyy")}
            </div>
          </div>
        </div>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        
      </Slider>
      </div>
    </Grid>
  );
};

export default DateSlider;
