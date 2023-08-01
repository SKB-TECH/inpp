import React, { useContext } from "react";
import Image from "next/image";
import { IntlContext } from "../../../../context/Internationalization";

const AboutSectionOne = () => {
    const { messages } = useContext(IntlContext);
    return (
        <div className="section-contenair section-contenair-white  mt-0 mt-lg-5 mt-xl-5 ">
            <div className="container-xl container-lg">
                <div className="row p-3 align-items-center justify-content-center">

                    <div className="col-12 pt-3 pt-lg-0 pt-xl-0 col-lg-6 col-xl-6 align-items-md-end justify-content-md-center d-md-flex">
                        <div className="image-container-2">
                            <Image
                                placeholder="blur"
                                blurDataURL="assets/images/covers/b.jpg"
                                src="assets/images/covers/36.png"
                                alt="suppe"
                                className="img-fluid-site boreder-site image-2"
                                fill
                                sizes="100vw" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6 mt-5 mt-xl-0 mt-lg-0">
                        <h4 className="text-site">
                            {messages['aboutPage'].section1.title}
                        </h4>
                        <p className="text-justify text-site2">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            {messages['aboutPage'].section1.details.part1}

                        </p>
                        <p className="text-justify text-site2">
                            {messages['aboutPage'].section1.details.part2}

                        </p>
                        <p className="text-justify text-site2">
                            {messages['aboutPage'].section1.details.part3}

                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default AboutSectionOne
