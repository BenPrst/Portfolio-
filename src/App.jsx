import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="h-screen">
      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        className="h-full"
      >
        <SwiperSlide>
          <Header />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Projects />
        </SwiperSlide>
        <SwiperSlide>
          <Gallery />
        </SwiperSlide>
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
