import React from "react";
import {AboutCover, AboutSection2, AboutSection3, AboutSectionOne} from "../../components/pages/aboutus/elements";
import Footer from "../../components/layouts/footer";
import {HomeCover} from "../../components/pages/home/elements";


const Aboutus = () => {
    return (
        <React.Fragment>
            <div className="cover-grey  pb-5 pb-xl-1 pb-lg-1">
                <AboutCover/>
            </div>
            <AboutSectionOne/>
            <AboutSection2/>
            <AboutSection3/>
            <HomeCover/>
            <Footer/>
        </React.Fragment>
    )
}

export default Aboutus
