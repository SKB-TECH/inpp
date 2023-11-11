import React from "react";
import Image from "next/image";
import { apros, items } from "@/utils/data";
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutSectionOne = () => {
    React.useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
          });
      }, [])
    return (
        <div className="section-contenair section-contenair-white  mt-0 mt-lg-5 mt-xl-5 ">
            <div className="container-xl container-lg">
                <div className="row p-3 align-items-center justify-content-center">

                    <div  data-aos="fade-left" className="col-12 pt-3 pt-lg-0 pt-xl-0 col-lg-6 col-xl-6 align-items-md-end justify-content-md-center d-md-flex">
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
                    <div data-aos="fade-down" className="col-12 col-lg-6 col-xl-6 mt-5 mt-xl-0 mt-lg-0">
                        <h4 className="text-site mb-2">
                            Que savez-vous de INPP ?
                        </h4>
                        
                            {
                                apros.map((item, index)=>(
                                    <p className="text-justify text-site2 gap-3" key={index}> 
                                        {item.para1}
                                        {item.para2}
                                        {item.para3}
                                    </p>
                                    
                                ))
                            }
                        
                      
                    </div>


                </div>
            </div>
        </div>
    );
}
export default AboutSectionOne
