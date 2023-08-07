import React, { useState, useEffect, useContext } from "react";
import { Menu } from "react-feather";
import ManuMobile from "./manuMobile";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import IntlDropdown from "../../elements/intlDropdown";
import { IntlContext } from "../../../context/Internationalization";
import { Facebook } from "react-feather";
import { FaUser } from "react-icons/fa";
import { User } from "react-feather";
import { Button } from "antd";
import AccountDrawer from "../../elements/user/login";
import logo from '../../../public/assets/logos/logo.jpg'

const Header = () => {

    const [openAccount, setOpenAccount] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

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
    const { messages } = useContext(IntlContext);
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
                                        width={600}
                                        height={600}
                                        style={{
                                            maxWidth: 200,
                                            height: "auto"
                                        }} />
                                </Link>
                            </div>
                        </div>
                        <div className="  d-none d-lg-flex d-xl-flex col-8 col-xl-10 col-lg-10 items-center gap-2 ">
                            <div className="navigation d-none d-lg-flex d-xl-flex col-12 justify-content-end">
                                <Link href="/" className={`${isScroll ? "linkItem-light" : "linkItem"} 
                            ${location.pathname === "/" ? "is-active" : ""}`}>
                                    {messages['home']}
                                </Link>
                                <Link href="/aboutus" className={`${isScroll ? "linkItem-light" : "linkItem"} 
                            ${location.pathname === "/aboutus" ? "is-active" : ""}  `}>
                                    {messages['about']}
                                </Link>
                                <Link href="/oeuvres" className={`${isScroll ? "linkItem-light" : "linkItem"} 
                            ${location.pathname === "/oeuvres" ? "is-active" : ""}  `}>
                                    {messages['Oeuvres']}
                                </Link>
                                {/* Add action to connect wallet of user */}
                                <button className="button-primary">Connect Wallet</button>
                                <IntlDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AccountDrawer open={openAccount}  onClose={handleAccountDrawer}  />
        </>
    )
}
export default Header;
