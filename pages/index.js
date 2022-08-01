import {ColorModeSwitcher} from "../components/ColorModeSwitch";
import React from "react";
import HomepageNav from "../components/homepageNav";

function HomePage(){
    return(
        <>
            <ColorModeSwitcher/>
            <HomepageNav/>
        </>
    )
}

export default HomePage;