import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/errorStyle.css"
import "swiper/css/swiper.css"
import "../styles/loader.css"
import "../styles/styles.css"
import {SiteLayout} from "../layouts";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import { IntlProviderWrapper } from "../context/Internationalization";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";


const { chains, provider } = configureChains(
	[chain.polygonMumbai],
	// [chain.polygon],
	[publicProvider()],
);

const { connectors } = getDefaultWallets({
	appName: "Bundlr Tools",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

export default function App({Component, pageProps}) {
    return (
        <WagmiConfig client={wagmiClient}>
            	<RainbowKitProvider
				chains={chains}
				theme={darkTheme({
					accentColor: "var(--primary)",
					accentColorForeground: "var(--background)",
					borderRadius: "small",
					fontStack: "system",
					overlayBlur: "small",
				})}
			>
             <IntlProviderWrapper>
            <SiteLayout>
                <Component {...pageProps} />
            </SiteLayout>
            <ToastContainer />
        </IntlProviderWrapper>
            </RainbowKitProvider>
        </WagmiConfig>
       
    )
}
