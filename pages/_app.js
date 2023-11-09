import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/errorStyle.css"
import "swiper/css/swiper.css"
import "../styles/loader.css"
import "../styles/styles.css"
import {SiteLayout} from "../layouts";
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from "@/context/contextProvider";

export default function App({Component, pageProps}) {
    return (
        <ContextProvider>
            <SiteLayout>
                <Component {...pageProps} />
               
            </SiteLayout>
           
        </ContextProvider>
    )
}
