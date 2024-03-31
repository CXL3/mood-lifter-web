"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import HomeSlide from "../HomeSlide";
import slidesData from "../../data/slidesData";

export default function HomeCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      speed={1500}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <HomeSlide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
