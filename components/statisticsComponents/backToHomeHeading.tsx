import {Grommet, Heading} from "grommet/components";
import {Header, Nav} from 'grommet';
import styles from "../../css/bounceHeading.module.scss";
import Link from "next/Link";
import {Home} from "grommet-icons";
import React from "react";


const BackToHomeHeading = () => {
    return (
        <>
            <Grommet>
                <Header className={styles.header}>
                    <Heading className={styles.headingTitle}>
                        Bounce
                    </Heading>
                    <Nav direction="row">
                        <Link href="/">
                            <a>
                                <Home color={"white"}/>
                            </a>
                        </Link>
                    </Nav>
                </Header>
            </Grommet>
        </>
    )

}

export default BackToHomeHeading;