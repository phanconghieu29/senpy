import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./InfoCard.css";
import event1 from "../../img/event1.png";
import event2 from "../../img/huit-startup.jpg";
import event3 from "../../img/event3.jpg";
import event4 from "../../img/event4.jpg";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const InfoCard = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="InfoCard">
      <h2>Các sự kiện hot</h2>
      <Slider {...settings}>
        <div>
          <img src={event1} alt="Cover" className="eventImage" />
        </div>
        <div>
          <img src={event2} alt="Cover" className="eventImage" />
        </div>
        <div>
          <img src={event3} alt="Cover" className="eventImage" />
        </div>
        <div>
          <img src={event4} alt="Cover" className="eventImage" />
        </div>
      </Slider>
    </div>
  );
};

export default InfoCard;
