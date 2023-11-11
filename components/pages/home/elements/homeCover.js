'use client'
import React, { useContext } from "react";
import Swiper from "react-id-swiper";
import Image from "next/image";
import fille from '../../../../public/fillerb.png';
import DemandeForm from "@/components/elements/demandeForm";


const HomeCover = () => {
    const [open,setOpen]=React.useState(false)
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
        <section className="flex flex-col  lg:px-14 lg:flex-row gap-10 container lx:px-0 mx-auto w-full h-full justify-center items-center mt-24">
                <div className={"flex flex-col justify-around gap-5 lg:w-[50%] w-[100%] h-full"}>
                    <h3 className={"font-bold text-5xl"}>
                        Prepare votre <span className="text-orange"> Avenir </span> Avec Assurance Ensemble avec <span className="text-orange">INPP</span>
                    </h3>
                    <p className={"text-lg"}>
                        Avec des formations sur mesure et a votre rythme, <br/>Nous sommes capable a rednre votre avenir meilleure  

                    </p>
                    <button className={"h-10 w-full lg:w-44 bg-orange text-white rounded-lg p-2 hover:shadow-lg hover:cursor-pointer"} onClick={()=>setOpen(true)}>
                            Demander Un Stage
                    </button>
                </div>
                <div className={"flex flex-col justify-around gap-5 lg:w-[50%] w-[100%] relative"}>
                    <Image
                        src={fille}
                        width={800}
                        height={800}
                        alt="heor iamge"
                        className={"object-fill"}
                    />
                </div>
                <DemandeForm opens={open} setOpens={setOpen}/>
        </section>
    );
}
export default HomeCover
