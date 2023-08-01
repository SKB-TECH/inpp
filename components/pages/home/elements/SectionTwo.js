import React, { useState } from 'react';
import { items } from '../../../../utils/data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
import Card_two from '../../../elements/Card_two';
const SectionTwo = () => {
  const settings = {
    className: 'flex flex-col gap-10 justify-center items-center',
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "60px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
      
        <div className='w-[100%] lg:w-[95%]  mt-20 '>
          <div className='p-2 flex flex-col min-w-full lg:text-4xlmin-h-full mb-10 justify-around items-center text-2xl font-bold'>News of the month</div>
        <Slider {...settings}>
         <Card_two images={'/12.jpeg'}/>
         <Card_two images={'/15.jpeg'}/>
         <Card_two images={'/16.jpeg'}/>
         <Card_two images={'/10.jpeg'} />
        </Slider>
        
        </div>

  )
}

export default SectionTwo