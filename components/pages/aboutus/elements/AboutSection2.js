import React from "react";
import Image from "next/image";
import {objectif }from '@/utils/data';
import { Timeline } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';



const AboutSection2= () => {
    React.useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
          });
      }, [])
return (
    <div data-aos="fade-down" className="section-contenair section-contenair-white  mt-0 mt-lg-5 mt-xl-5 ">
        <div className="container-xl container-lg border-top mt-14">
            <div className="row p-3 align-items-center justify-content-center">
                <div className="col-12 pt-3 pt-lg-0 pt-xl-0 col-lg-6 col-xl-6 align-items-md-end justify-content-md-center d-flex d-lg-none d-xl-none">
                    <div className="image-container-2">
                        <Image
                            placeholder="blur"
                            blurDataURL="/filleInpp.jpg"
                            src="/filleInpp.jpg"
                            alt="suppe"
                            className="img-fluid-site boreder-site image-2"
                            fill
                            sizes="100vw" />
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-6 mt-5 mt-xl-0 mt-lg-0">
                    <h4 className="text-site mb-5">
                       Nos  Missions
                    </h4>
                    <p className="text-justify text-site2">
                            <Timeline items={objectif}/>
                    </p>
                </div>
                <div data-aos="fade-left" className="col-12 pt-3 pt-lg-0 pt-xl-0 col-lg-6 col-xl-6 align-items-md-end justify-content-md-center d-none d-xl-flex d-lg-flex ">
                    <div className="image-container-2">
                        <Image
                            placeholder="blur"
                            blurDataURL="/mission.jpg"
                            src="/mission.jpg"
                            alt="suppe"
                            className="img-fluid-site boreder-site image-2"
                            fill
                            sizes="100vw" />
                    </div>
                </div>

            </div>
        </div>
    </div>
);
}
export default AboutSection2
