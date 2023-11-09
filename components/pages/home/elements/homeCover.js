'use client'
import React, { useContext } from "react";
import Swiper from "react-id-swiper";
import Image from "next/image";
import gal1 from '../../../../public/gorille3.jpg'
import gal2 from '../../../../public/gorille5.jpg'
import gal3 from '../../../../public/gorille6.jpg'
const HomeCover = () => {

    const params = {
        slidesPerView: 1,
        spaceBetween: 1,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: false,

    };



    return (
        <div className="section-contenair-last section-contenair-site-image bg-gray-950 d-flex justify-content-center align-items-center sm:h-[10rem] ">
            <div className="container-xl container-lg  ">
                <div className="">
                    <Swiper {...params}  >
                        <div className="d-flex justify-content-center align-items-center flex-col lg:h-[34rem] h-96 w-screen">
                            <Image src={gal1} width={1000} height={490} className="min-h-full w-full" alt="picturez"/>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-col lg:h-[34rem] h-96 w-screen">
                            <Image src={gal2} width={1000} height={490} className="min-h-full w-full" alt="picturez"/>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-col lg:h-[34rem] h-96  w-screen">
                            <Image src={gal3} width={1000} height={490} className="min-h-full w-full" alt="picturez"/>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
export default HomeCover
