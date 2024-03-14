'use client'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import HomeSlide from '../HomeSlide'

export default function HomeCarousel() {
  const handleSlideClick = () => {
    console.log('Slide')
  }

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
  ]

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      onClickItem={handleSlideClick}
      showThumbs={false}
      className='w-full mx-auto'
    >
      {slidesData.map((slide, index) => (
        <HomeSlide key={index} text={slide.text} color={slide.color} />
      ))}
    </Carousel>
  )
}
