import {Nav} from "grommet";
import Link from "next/link";
import {Button} from "grommet/components";
import {Database, Scorecard} from "grommet-icons";
import React, {useEffect, useState} from "react";
import styles from "../css/homepage.module.scss"
import {getSession} from "next-auth/react";



const HomePageNav = () => {
    const [showPreviousButton, setShowPreviousButton] = useState(false)

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession();
            if (!session) {
                setShowPreviousButton(false)
            } else {
                setShowPreviousButton(true)
            }
        }
        securePage();
    }, [])


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
                {showPreviousButton && (
            <Link href='/matches'>
                <div className={styles.btn}>
                <Button
                primary
                icon={<Database color={'white'}/>}
                label="View Previous Match"
                size={"large"}
                color={"#480096"}

            />    </div></Link>
                )}
            </div>
        </Nav>
    );

}

export default HomePageNav;
