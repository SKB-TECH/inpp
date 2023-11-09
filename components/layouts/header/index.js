import React, { useState, useEffect, useContext } from "react";
import { Menu } from "react-feather";
import ManuMobile from "./manuMobile";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "antd";
import AccountDrawer from "../../elements/user/login";
import logo from '../../../public/assets/logos/logoblk.jpg';
import ConnexionForm from "@/components/elements/ConnexionForm";

const Header = () => {

    const [openAccount, setOpenAccount] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openForm,setopenForm]=useState(false)
    const handleAccountDrawer = () => {
        setOpenAccount(!openAccount);
    };
    const handleMenuDrawer = () => {
        setOpenMenu(!openMenu);
    };
    const handleSearchDrawer = () => {
        setOpenSearch(!openSearch);
    };

    const [isScroll, setIsScroll] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const [isOpen, setOpen] = React.useState(false);
    const openMenuHandel = () => {
        setOpen(true);
    }

    function close() {
        setOpen(false);
    }

    const location = useRouter()
    // const { messages } = useContext(IntlContext);
    return (
        <>
            {
                isOpen ?
                    <ManuMobile close={close} />
                    : null
            }
            <div className={isScroll === true ? "header-light" : "header"}>
                <div className="container">
                    <div className="header-content h-10">
                        <div className=" col-6 col-xl-2 col-lg-2">
                            <div className="logo-container">
                                <Link href={"/"} className="logo-a">
                                    <Image
                                        src={logo}
                                        alt="cover"
                                        className="logo-image"
                                        width={700}
                                        height={700}
                                        />
                                </Link>
                            </div>
                        </div>
                        <div className="  d-none d-lg-flex d-xl-flex col-8 col-xl-10 col-lg-10 items-center gap-2 ">
                            <div className="navigation d-none d-lg-flex d-xl-flex col-12 justify-content-end">
                                <Link href="/" className={`${isScroll ? "linkItem-light" : "linkItem"} 
                            ${location.pathname === "/" ? "is-active" : ""}`}>
                                    {"Acceuil"}
                                </Link>
                                <Link href="/aboutus" className={`${isScroll ? "linkItem-light" : "linkItem"} 
                            ${location.pathname === "/aboutus" ? "is-active" : ""}  `}>
                                    {"Apropos"}
                                </Link>
                                <Button className="button-primary" onClick={()=>setopenForm(true)}>
                                    Connexion
                                </Button>
                                {/* <IntlDropdown /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConnexionForm opens={openForm}  setOpens={setopenForm}/>
        </>
    )
}
export default Header;
