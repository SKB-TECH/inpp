import React from 'react';
import NavbarOeuvre from '../components/Oeuvres/Navbar_Oeuvre';
import SidebarOeuvre from '../components/Oeuvres/Sidebar_Oeuvres';


const Site_oeuvre=(props)=>{
  return (
    <div>
        <SidebarOeuvre />
        <NavbarOeuvre />
        <div className="container-layer">
            {React.cloneElement(props.children,{...props})}
        </div>
    </div>
  )
}

export default Site_oeuvre