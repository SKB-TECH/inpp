import React,{useContext} from "react";
import Image from "next/image";
import { IntlContext } from "../../../../context/contextProvider";

const AboutSection2= () => {
    const { messages } = useContext(IntlContext);
return (
    <div className="section-contenair section-contenair-white  mt-0 mt-lg-5 mt-xl-5 ">
        <div className="container-xl container-lg border-top">
            <div className="row p-3 align-items-center justify-content-center">

                <div className="col-12 pt-3 pt-lg-0 pt-xl-0 col-lg-6 col-xl-6 align-items-md-end justify-content-md-center d-flex d-lg-none d-xl-none">
                    <div className="image-container-2">
                        <Image
                            placeholder="blur"
                            blurDataURL="/gal5.jpg"
                            src="/gal5.jpg"
                            alt="suppe"
                            className="img-fluid-site boreder-site image-2"
                            fill
                            sizes="100vw" />
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-6 mt-5 mt-xl-0 mt-lg-0">
                    <h4 className="text-site">
                        Vision de PNKB
                    </h4>
                    <p className="text-justify text-site2">
                    Développer un nouveau paradigme et de transformer un lourd passé d’injustices à l’encontre des peuples indigènes en un modèle de conservation efficace basé sur les droits humains
                    </p>
                </div>
                <div className="col-12 pt-3 pt-lg-0 pt-xl-0 col-lg-6 col-xl-6 align-items-md-end justify-content-md-center d-none d-xl-flex d-lg-flex ">
                    <div className="image-container-2">
                        <Image
                            placeholder="blur"
                            blurDataURL="/gorille6.jpg"
                            src="/gorille6.jpg"
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
