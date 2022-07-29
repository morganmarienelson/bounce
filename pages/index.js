import {ColorModeSwitcher} from "../components/ColorModeSwitch";
import {Nav} from "grommet";
import {Button} from "grommet/components";
import React from "react";
import { Scorecard, Database} from "grommet-icons"
import Link from "next/link";


function HomePage(){
    return(
        <>
            <ColorModeSwitcher/>
            <div style={{margin: 60}}>
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
                    label="View Previous Match"
                /></Link>
            </Nav>
            </div>
        </>
    )
}

export default HomePage;