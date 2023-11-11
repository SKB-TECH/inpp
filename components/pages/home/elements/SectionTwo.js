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
          <div className='p-2 flex flex-col min-w-full lg:text-4xlmin-h-full mb-10 justify-around items-center'>
            <h3>Temoignages</h3>
            <p className="text-center text-[16px]  text-gray-400">
              Les temoignages de quelques anciens qui sont deja place au sein des entreprises grace a nos formations de qualite
            </p>
          </div>
        <Slider {...settings} className="gap-14">
         <Card_two  nom={"Alliance "} ville={"Bukavu"} temoignage={"Grace a l'inpp je suis devenu utile dans la societe"} arr={[1,2,3,4]}/>
         <Card_two  nom={"Ezekiel"} ville={"Goma"} temoignage={"Grace a l'inpp j'ai trouve un bon salaire au sein de l'entreprise"} arr={[1,2,3,4,5]}/>
         <Card_two nom={"Chanceline"} ville={"Bukavu"} temoignage={"A cause de l'inpp je suis devenu gerant d'un grand hotel"} arr={[1,2,3,4]}/>
         {/* <Card_two nom={"Armela"} ville={"Goma"} temoignage={"Inpp pour moi c'est une source de bonheur"} arr={[1,2,3,4,5]}/> */}
        </Slider>
        
        </div>

  )
}

export default SectionTwo