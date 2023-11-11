import React  from "react";
import {Container} from "reactstrap";
import {Facebook, Instagram, Twitter, Youtube} from "react-feather";
import Link from "next/link";
import Image from "next/image";



const Footer=()=>{
    return(
    
            <section className="bg-orange flex flex-col min-w-full min-h-full">
                <div className="flex flex-col lg:flex-row justify-around min-w-full p-10 gap-10">
                    <div className="">
                        <h5>EXPLORE</h5>
                        <div className="d-flex flex-column ">
                            <Link href="/" className="footer_link">Accueil</Link>
                            <Link href="/aboutus" className="footer_link">Apropos</Link>
                            <Link href="/" className="footer_link">Equipe</Link>
                            <Link href="/" className="footer_link">Contact</Link>
                        </div>
                    </div>
                    <div className="">
                        <h5>Informations</h5>
                        <div className="d-flex flex-column ">
                            <Link href="/" className="footer_link"> Privacy & Policy</Link>
                            <Link href="/" className="footer_link">Terms & Conditions </Link>
                            <Link href="/" className="footer_link">Cookie Policy </Link>
                            <Link href="/" className="footer_link">Disclaim </Link>
                        </div>
                    </div>
                    <div className="">
                        <h5>Contact</h5>
                        <div className="d-flex flex-column ">
                            <Link href="#" target="_blank" className="footer_link"> +243 977423201</Link>
                            <Link href="mailto://danielclaudiustoica@yahoo.com" target="_blank" className="footer_link"> INPP-DRC</Link>
                        
                            <button className={"h-10 w-full lg:w-44 bg-orange text-white rounded-lg p-2 hover:shadow-lg hover:cursor-pointer"}>
                            Demander Un Stage
                    </button>
                        </div>
                    </div>

                    <div className="col-12 col-lg-2 col-xl-2 d-flex d-xl-none d-lg-none container   mt-4 mt-xl-0 mt-lg-0">
                        <div className="col-6 d-flex justify-content-between align-content-start align-items-lg-center align-items-xl-center mt-4 mt-xl-0 mt-lg-0">
                            <Link href="/" target="_blank"  className="footer_link"><Instagram/></Link>
                            <Link href="/" target="_blank" className="footer_link"> <Facebook/></Link>
                            <Link href="/" target="_blank" className="footer_link"><Twitter/></Link>
                            <Link href="/" target="_blank" className="footer_link"> <Youtube/></Link>
                        </div>
                    </div>

                </div>
                    <hr className="text-white"/>
                    <div className="row pt-3 pb-3 d-flex align-items-center ml-5">
                        <div className="col-12 col-lg-6 col-xl-6 justify-content-start align-content-start ">
                            <p className="text-white">© {new Date().getFullYear()} <strong> INPP-DRC</strong> -All rights reserved </p>
                        </div>

                        <div className="col-4 col-lg-2 col-xl-2 d-none d-xl-flex d-lg-flex    justify-content-between align-content-start align-items-lg-center align-items-xl-center mt-4 mt-xl-0 mt-lg-0">
                            <Link href="/" target="_blank"  className="footer_link"><Instagram/></Link>
                            <Link href="/" target="_blank" className="footer_link"> <Facebook/></Link>
                            <Link href="/" target="_blank" className="footer_link"><Twitter/></Link>
                            <Link href="/" target="_blank" className="footer_link"> <Youtube/></Link>
                        </div>
                    </div>
            </section>
    )
}
export default Footer;
