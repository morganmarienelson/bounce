import {Grommet, Heading} from "grommet/components";
import {Header, Nav} from 'grommet';
import styles from "../../layout/BounceHeading.module.css"
import Link from "next/Link";
import {Home, LinkPrevious} from "grommet-icons";
import React from "react";


const PrevMatchLogHeading = () => {
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

export default PrevMatchLogHeading;