import React from "react";
import {TeamCover} from "../../components/pages/team";
import Footer from "../../components/layouts/footer";
import {HomeCover} from "../../components/pages/home/elements";
import TeamsListSection from "../../components/pages/team/TeamsListSection";

const Team = () => {
    return (
       <React.Fragment>
           <div className="cover-orange_25  pb-5 pb-xl-1 pb-lg-1">
           <TeamCover/>
           </div>
           <TeamsListSection/>
           <HomeCover/>
           <Footer/>
       </React.Fragment>
    )
}

export default Team
