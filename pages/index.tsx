import {ColorModeSwitcher} from "../components/ColorModeSwitch";
import React from "react";
import HomepageNav from "../components/homepageNav";
import BounceHomePageHeading from "../components/BounceHomePageHeading";

function HomePage(){
    return(
        <>
            <BounceHomePageHeading/>
            <ColorModeSwitcher/>
            <HomepageNav/>
        </>
    )
}

export default HomePage;