import {ColorModeSwitcher} from "../components/ColorModeSwitch";
import React from "react";
import HomepageNav from "../components/homepageNav";
import BounceHeading from "../components/layout/BounceHeading";

function HomePage(){
    return(
        <>
            <BounceHeading/>
            <ColorModeSwitcher/>
            <HomepageNav/>
        </>
    )
}

export default HomePage;