import React from "react";
import Image from "next/image";
import { IntlContext } from "../../../../context/Internationalization";

const AboutSection3 = () => {
    const { messages } = React.useContext(IntlContext)
    return (
        <React.Fragment>
            <div className="section-contenair section-contenair-white  mt-0 mt-lg-5 mt-xl-5 ">
                <div className="container-xl container-lg border-top">
                    <div className="row p-3 align-items-center justify-content-center">

                        <div className="col-12 pt-3 pt-lg-0 pt-xl-0 col-lg-6 col-xl-6 align-items-md-end justify-content-md-center d-md-flex">
                            <div className="image-container-2">
                                <Image
                                    placeholder="blur"
                                    blurDataURL="assets/images/covers/b.jpg"
                                    src="assets/images/covers/34.jpg"
                                    alt="suppe"
                                    className="img-fluid-site boreder-site image-2"
                                    fill
                                    sizes="100vw" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-6 mt-5 mt-xl-0 mt-lg-0">
                            <h4 className="text-site">
                                {messages['aboutPage'].section3.title}

                            </h4>
                            <p className="text-justify text-site2">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                {messages['aboutPage'].section3.description}
                                
                            </p>
                        </div>


                    </div>
                </div>
            </div>

            <div className="section-contenair section-contenair-white  mt-0 mt-lg-5 mt-xl-5 ">
                <div className="container-xl container-lg border-top">
                    <div className="row p-3 align-items-center justify-content-center">

                        <div className="col-12 pt-3 pt-lg-0 pt-xl-0 col-lg-6 col-xl-6 align-items-md-end justify-content-md-center d-flex d-lg-none d-xl-none">
                            <div className="image-container-2">
                                <Image
                                    placeholder="blur"
                                    blurDataURL="assets/images/covers/b.jpg"
                                    src="assets/images/covers/35.png"
                                    alt="suppe"
                                    className="img-fluid-site boreder-site image-2"
                                    fill
                                    sizes="100vw" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 col-xl-6 mt-5 mt-xl-0 mt-lg-0">
                            <h4 className="text-site">
                            {messages['aboutPage'].section4.title}
                               
                            </h4>
                            <p className="text-justify text-site2">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                {messages['aboutPage'].section3.description}
                               
                            </p>
                        </div>
                        <div className="col-12 pt-3 pt-lg-0 pt-xl-0 col-lg-6 col-xl-6 align-items-md-end justify-content-md-center d-none d-xl-flex d-lg-flex ">
                            <div className="image-container-2">
                                <Image
                                    placeholder="blur"
                                    blurDataURL="assets/images/covers/b.jpg"
                                    src="assets/images/covers/35.png"
                                    alt="suppe"
                                    className="img-fluid-site boreder-site image-2"
                                    fill
                                    sizes="100vw" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
export default AboutSection3
