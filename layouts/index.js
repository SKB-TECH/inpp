import React, { lazy } from "react";
import { SiteLoader } from "../components/elements/loaders";
const Site = lazy(() => import("./site"))
export const SiteLayout = ({ children }) => {
    return (
        <React.Suspense fallback={<SiteLoader />}>
            <Site>
                {children}
            </Site>
        </React.Suspense>
    )
}

