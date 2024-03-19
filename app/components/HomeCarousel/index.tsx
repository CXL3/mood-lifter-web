"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import HomeSlide from "../HomeSlide";

export default function HomeCarousel() {
  const slidesData = [
    {
      text: "Do a breathing exercise",
      color: "bg-pink-300/80",
      link: "/breathing-exercises",
      includeButton: true,
    }, // Soft Pink
    {
      text: "Gratitude List",
      color: "bg-blue-200/80",
      link: "/gratitude-list",
      includeButton: true,
    }, // Light Blue
    {
      text: "Think general mood words",
      color: "bg-green-200/80",
      link: "/mood-words",
      includeButton: true,
    }, // Soft Green
    {
      text: "Link to your favorite music",
      color: "bg-purple-300/80",
      link: "/favorite-music",
      includeButton: true,
    }, // Lavender
    {
      text: "Write a journal",
      color: "bg-yellow-200/80",
      link: "/write-journal",
      includeButton: true,
    }, // Pale Yellow
    {
      text: "Tapping game",
      color: "bg-orange-200/80",
      link: "/tapping-game",
      includeButton: true,
    }, // Light Orange
    {
      text: "Call a friend",
      color: "bg-teal-200/80",
      link: "/call-friend",
      includeButton: true,
    }, // Soft Teal
    {
      text: "Take a shower",
      color: "bg-indigo-200/80",
      link: "/take-shower",
      includeButton: true,
    }, // Light Indigo
    {
      text: "Take a nap",
      color: "bg-rose-200/80",
      link: "/take-nap",
      includeButton: false,
    }, // Pale Rose, no button as specified
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <HomeSlide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
