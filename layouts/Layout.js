import React, { lazy } from "react";
import { SiteLoader } from "../components/elements/loaders";
const Site = lazy(() => import("./site_oeuvre"))

 const Layout_Oeuvre = ({ children }) => {
    return (
        <React.Suspense fallback={<SiteLoader />}>
            <Site>
                {children}
            </Site>
        </React.Suspense>
    )
}

export default Layout_Oeuvre;