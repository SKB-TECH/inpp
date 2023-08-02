import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/errorStyle.css"
import "swiper/css/swiper.css"
import "../styles/loader.css"
import "../styles/styles.css"
import {SiteLayout} from "../layouts";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {IntlProviderWrapper} from "../context/Internationalization";

export default function App({Component, pageProps}) {
    return (
        <IntlProviderWrapper>
            <SiteLayout>
                <Component {...pageProps} />
            </SiteLayout>
            <ToastContainer />
        </IntlProviderWrapper>
    )
}
