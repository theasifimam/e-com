"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            alt="something"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            width="1400"
            height="500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="something"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80"
            width="1400"
            height="500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="something"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            width="1400"
            height="500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="something"
            src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
            width="1400"
            height="500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="something"
            src="https://images.unsplash.com/photo-1585565804112-f201f68c48b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            width="1400"
            height="500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="something"
            src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80"
            width="1400"
            height="500"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
