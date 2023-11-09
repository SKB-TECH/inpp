import React from "react";
import {
    HomeCover,
    HomeSection3,
    HomeSection4,
    HomeSection5,
    HomeSectionOne,
    HomeSectionTwo
} from "../components/pages/home/elements";
import Footer from "../components/layouts/footer";
import Head from "next/head";
import { recupereStorage,ClearStorage} from '@/functions';
import { useRouter } from 'next/router';



const Home = () => {
    
    return (
        <React.Fragment>
            <Head>
                <title>Inpp| Drc</title>
                <meta
                    name="description"
                    content="We are committed to putting our expertise at a process of digital transformation and technological innovation to the service of campanies for a common good."
                />
               
                <meta
                    property="og:title"
                    content="Inpp | Rdc"
                />
            
                <meta
                    property="og:description"
                    content="We are committed to putting our expertise at a process of digital transformation and technological innovation to the service of campanies for a common good."
                />
            </Head>
            <div className="home-bg">
                <HomeCover />
            </div>
            <HomeSectionOne />
            <HomeSectionTwo />
            <HomeSection3 />
            <HomeSection4 /> 
            <Footer/>
        </React.Fragment>
    );
}

export default Home;
