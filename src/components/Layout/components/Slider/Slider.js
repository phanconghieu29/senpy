import React, { useState } from 'react';
import Slider from 'react-slick';
import './slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../../../../assets/images'; // Import images

// Data for slider (including banners and events)
const slidesData = [
  { id: 1, imageUrl: images.homeBanner },
  { id: 2, imageUrl: images.aboutBanner },
  { id: 3, imageUrl: images.event1 },
  { id: 4, imageUrl: images.event2 },
  { id: 5, imageUrl: images.event3 },
];

// Custom Previous Arrow Component
const PrevArrow = ({ onClick, ...rest }) => (
  <div className="slick-prev" onClick={onClick} {...rest}>
    Prev
  </div>
);

// Custom Next Arrow Component
const NextArrow = ({ onClick, ...rest }) => (
  <div className="slick-next" onClick={onClick} {...rest}>
    Next
  </div>
);

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  draggable: true,
  nextArrow: <NextArrow />,  // Custom Next button
  prevArrow: <PrevArrow />,  // Custom Prev button
};

const Slidebar = () => {
  const [slides] = useState(slidesData);

  return (
    <div className="banner-wrapper">
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slidebar;
