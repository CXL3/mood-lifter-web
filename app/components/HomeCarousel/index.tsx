'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import HomeSlide from '../HomeSlide';

export default function HomeCarousel() {
  const slidesData = [
    { text: 'Do a breathing exercise', color: 'bg-red-500' },
    { text: 'Gratitude List', color: 'bg-green-500' },
    { text: 'Think general mood words', color: 'bg-blue-500' },
    { text: 'Link to your favorite music', color: 'bg-red-500' },
    { text: 'Write a journal', color: 'bg-green-500' },
    { text: 'Tapping game', color: 'bg-blue-500' },
    { text: 'Call a friend', color: 'bg-red-500' },
    { text: 'Take a shower', color: 'bg-green-500' },
    { text: 'Take a nap', color: 'bg-blue-500' },
  ];

  return (
    <Swiper
    pagination={{
      type: 'fraction',
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <HomeSlide text={slide.text} color={slide.color} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
