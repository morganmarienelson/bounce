import {Nav} from "grommet";
import Link from "next/link";
import {Button} from "grommet/components";
import {Database, Scorecard} from "grommet-icons";
import React from "react";
import styles from "./homepage.module.css"



const HomePageNav = () => {
    return (
    <div className={styles.btnContainer}>
        <Nav direction="column">
            <div className={styles.btnCol}>
            <Link href='/dashboard'>
                <div className={styles.btn}>
                    <Button
                        secondary
                        icon={<Scorecard color={'black'}/>}
                        hoverIndicator
                        label="New Match"
                    />
                </div>
              </Link>
            </div>
            <div className={styles.btnCol}>
            <Link href='/matchLog'>
                <div className={styles.btn}>
                <Button
                secondary
                icon={<Database color={'black'}/>}
                hoverIndicator
                label="View Previous Match"
            />    </div></Link>
            </div>
        </Nav>
    </div>
    );

}

export default HomePageNav;
