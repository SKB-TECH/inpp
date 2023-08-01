import Head from "next/head";
import React from "react";
export default function Home() {
  return (
    <React.Fragment>
            <Head>
                <title>Hadisi Yetu| Home </title>
                <meta
                    name="description"
                    content="Tell African story with your artwork."
                />
                <meta
                    property="og:title"
                    content="Hadisi-Yetu | Home"
                />
                <meta
                    property="og:image"
                    content="assets/logos/logo.jpg"
                />
                <meta
                    name="image"
                    content="assets/logos/logo.jpg"
                />
            </Head>
        </React.Fragment>
  )
}
