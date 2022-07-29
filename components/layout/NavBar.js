import Link from "next/link";
import {Button, Grommet, Heading} from "grommet/components";
import { Box, Header, Menu, Nav, ResponsiveContext } from 'grommet';
import styles from "./navBar.module.css"
import React from "react";

import {ColorModeSwitcher} from "../ColorModeSwitch";


function NavBar() {
    return (
        <>
             <Grommet>
                 <Header className={styles.header}>
                     <Heading className={styles.headingTitle}>
                         <a href='/'>  Bounce </a>
                     </Heading>
                     <ColorModeSwitcher/>
              </Header>
              </Grommet>

            </>
        )

}

export default NavBar;