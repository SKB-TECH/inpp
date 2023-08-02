import React from "react";
import Header from "../components/layouts/header";

const Site = (props) => {
    return (
        <div>
            <Header />
            <div className="container-layer">
                {React.cloneElement(props.children,{...props})}
            </div>
        </div>
    )
}
export default Site;
