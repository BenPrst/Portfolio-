import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";

import "../styles.scss";

// import required modules
import { EffectCube } from "swiper";

const Gallery = () => {
  return (
    <div className="h-screen">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        pagination={true}
        modules={[EffectCube]}
        className="h-full"
        direction="vertical"
      >
        <SwiperSlide>
          <img
            className="h-full"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
