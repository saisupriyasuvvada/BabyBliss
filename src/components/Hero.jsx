import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";

import baby1 from "../assets/baby1.jpg";
import baby2 from "../assets/baby2.jpg";
import baby3 from "../assets/baby3.jpg";
import baby4 from "../assets/baby4.jpg";

const Hero = () => {
  return (
    <section className="hero">
      {/* Left side - text */}
      <div className="hero-left">
        <h1>Welcome to BabyBliss</h1>
        <p>Your one-stop shop for baby products & essentials</p>
        <button className="hero-shop-btn">Shop Now</button>
      </div>

      {/* Right side - slider */}
      <div className="hero-right">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}        // Show 1 image at a time
          navigation               // Left/right arrows
          pagination={{ clickable: true }} // Dots below
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}              // Infinite loop
        >
          <SwiperSlide>
            <img src={baby1} alt="Banner 1" className="hero-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={baby2} alt="Banner 2" className="hero-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={baby3} alt="Banner 3" className="hero-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={baby4} alt="Banner 4" className="hero-image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
