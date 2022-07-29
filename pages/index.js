import {ColorModeSwitcher} from "../components/ColorModeSwitch";
import {Nav} from "grommet";
import {Button} from "grommet/components";
import React from "react";
import {Home, Scorecard, Database, LinkPrevious} from "grommet-icons"
import Link from "next/link";


function HomePage(){
    return(
        <>
           <h1>Home page</h1>
            <Nav direction="column">
                <Link href='/dashboard'><Button
                    secondary
                    icon={<Scorecard color={'black'}/>}
                    hoverIndicator
                    label="New Match"
                /></Link>
                <Link href='/matchLog'><Button
                    secondary
                    icon={<Database color={'black'}/>}
                    hoverIndicator
                /></Link>
            </Nav>
        </>
    )
}

export default HomePage;