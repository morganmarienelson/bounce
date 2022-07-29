import Link from "next/link";
import {Button, Grommet, Heading} from "grommet/components";
import {Header,  Nav } from 'grommet';
import styles from "./navBar.module.css"
import React from "react";
import {Home} from "grommet-icons";


function NavBar() {
    return (
        <>
             <Grommet>
                 <Header className={styles.header}>
                     <Heading className={styles.headingTitle}>
                         Bounce
                     </Heading>
                     <Nav direction="column">
                         <Link href='/'>
                         <Button
                             secondary
                             style={{marginLeft: 63}}
                             icon={<Home color={'white'}/>}
                             hoverIndicator
                         />
                         </Link>
                     </Nav>
              </Header>
              </Grommet>

            </>
        )

}

export default NavBar;