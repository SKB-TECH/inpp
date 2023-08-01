import React from "react";
import loader from "../../public/assets/lottie/loader.json";
import Lottie from "lottie-react";
export const SiteLoader=()=>{
    return(
        <div className="container-loader">
           <div className="loader-site">
               <Lottie animationData={loader} />
           </div>
        </div>
    )
}