import {Nav} from "grommet";
import Link from "next/link";
import {Button} from "grommet/components";
import {Database, Scorecard} from "grommet-icons";
import React from "react";
import styles from "./homepage.module.css"



const HomePageNav = () => {
    return (
        <Nav direction="column" className={styles.btnContainer}>
            <div className={styles.btnCol}>
            <Link href='/dashboard'>
                <div className={styles.btn}>
                    <Button
                        primary
                        icon={<Scorecard color={'white'}/>}
                        label="Record New Match"
                        size={"large"}
                        color={"#480096"}
                    />
                </div>
              </Link>
            </div>
            <div className={styles.btnCol}>
            <Link href='/matchLog'>
                <div className={styles.btn}>
                <Button
                primary
                icon={<Database color={'white'}/>}
                label="View Previous Matches"
                size={"large"}
                color={"#480096"}

            />    </div></Link>
            </div>
        </Nav>
    );

}

export default HomePageNav;
