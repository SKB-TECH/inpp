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
                                blurDataURL="/gorille3.jpg"
                                src="/gorille3.jpg"
                                alt="suppe"
                                className="img-fluid-site boreder-site image-2"
                                fill
                                sizes="100vw" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6 mt-5 mt-xl-0 mt-lg-0">
                        <h4 className="text-site">
                            Que savez-vous de PNKB ?
                        </h4>
                        <p className="text-justify text-site2">
                        Kahuzi Biega est un parc national situé dans la province du Sud-Kivu en République démocratique du Congo. Il est connu pour abriter le gorille des montagnes, une espèce en voie de disparition, ainsi que d'autres espèces animales et végétales rares. Le parc est inscrit sur la liste du patrimoine mondial de l'UNESCO depuis 1980.
                        </p>
                      
                    </div>


                </div>
            </div>
        </div>
    );
}
export default AboutSectionOne
