import React from "react";
import {ContactCover, ContactSectionOne} from "../../components/pages/contact";
import Footer from "../../components/layouts/footer";

const Contact = () => {
    return (
        <React.Fragment>
            <div className="  pb-5 pb-xl-1 pb-lg-1">
                <ContactCover/>
            </div>
            <div className="sep-site "/>
            <ContactSectionOne/>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact
