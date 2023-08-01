import React, {useContext} from "react";
import ReactCountryFlag from 'react-country-flag'
import {UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'

import {IoGlobeOutline} from "react-icons/io5";
import {IntlContext} from "../../context/Internationalization";

const IntlDropdown = (props) => {
    const intlContext = useContext(IntlContext)
    const handleLangUpdate = (e, lang) => {
        e.preventDefault()
        intlContext.switchLanguage(lang)
        localStorage.setItem("forcedLang", lang);
    }
    const langObj = {
        en: 'En',
        fr: 'Fr'
    }



    return (
        <UncontrolledDropdown href='/' tag='li' className='dropdown-language '>
            <DropdownToggle href='/' tag='a' data-testid="dropdown" onClick={e => e.preventDefault()}>
                <div className="d-flex justify-content-center align-items-center gap-1">
                    <IoGlobeOutline className='globe-icon'  color="#0c3a64" size={20} />
                    <span style={{textDecoration: 'none', color: '#0c3a64', fontWeight:"semibold", fontSize:12}} {...props}>{langObj[intlContext.locale]}</span>
                </div>
            </DropdownToggle>
            <DropdownMenu className='mt-0' end>
                <DropdownItem href='/' tag='a' data-testid="dropdown-item"  onClick={e => handleLangUpdate(e, 'fr')} data-test>
                    <ReactCountryFlag className='country-flag' countryCode='fr' svg />
                    <span className='ml-1'>Français</span>
                </DropdownItem>
                <DropdownItem href='/' tag='a' data-testid="dropdown-item2" onClick={e => handleLangUpdate(e, 'en')}>
                    <ReactCountryFlag className='country-flag' countryCode='us' svg/>
                    <span className='ml-1'>English</span>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default IntlDropdown
