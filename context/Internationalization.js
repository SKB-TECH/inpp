import React, {useState, createContext, useEffect} from "react";
import {IntlProvider} from "react-intl";

import siteMessageFr from "../data/locales/fr.json"
import siteMessageEn from "../data/locales/en.json"
import moment from "moment";
import "moment/locale/fr"
import "moment/locale/es"
import "moment/locale/en-au"

const allMessage = {
    fr:{...siteMessageFr},
    en:{...siteMessageEn}
}
const Context = createContext(undefined);

const IntlProviderWrapper = ({children}) => {
    // ** States
    const [locale, setLocale] = useState('en')
    const [messages, setMessages] = useState(allMessage['en'])
    moment.locale(locale)

    // ** Switches Language
    const switchLanguage = lang => {
        setLocale(lang)
        setMessages(allMessage[lang])
        localStorage.setItem('lang',lang)
    }

    useEffect(()=>{
        const lang = localStorage.getItem("lang")
        if (lang){
            setLocale(lang)
            setMessages(allMessage[lang])
        }
    },[])

    return (
        <Context.Provider value={{locale, switchLanguage, messages}}>
            <IntlProvider key={locale} locale={locale} messages={messages} defaultLocale='fr'>
                {children}
            </IntlProvider>
        </Context.Provider>
    )
}

export {IntlProviderWrapper, Context as IntlContext}
