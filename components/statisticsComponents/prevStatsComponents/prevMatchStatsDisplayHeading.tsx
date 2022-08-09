import {Grommet, Heading} from "grommet/components";
import {Header, Nav} from 'grommet';
import styles from "../../../css/bounceHeading.module.css"
import Link from "next/Link";
import {LinkPrevious,Home} from "grommet-icons";
import React from "react";
import {MatchDetails} from "../../../types/matchDetails";

interface PrevMatchStatsDisplayHeadingProps{
    stats: MatchDetails
}


const PrevMatchStatsDisplayHeading: React.FC<PrevMatchStatsDisplayHeadingProps> = ({stats}) => {
    return (
        <>
            <Grommet>
                <Header className={styles.header}>
                    <Heading className={styles.headingTitle}>
                        Bounce
                    </Heading>
                    <div className={styles.matchDetailsTitle}>{stats.playerName} vs {stats.opponentName}: 4/30/2020</div>
                    <Nav direction="row">
                        <Link href="/">
                            <a>
                                <Home color={"white"}/>
                            </a>
                        </Link>
                        <Link href="/index">
                            <a>
                                <LinkPrevious color={"white"} transform={"rotate(180)"}/>
                            </a>
                        </Link>
                    </Nav>
                </Header>
            </Grommet>
        </>
    )

}

export default PrevMatchStatsDisplayHeading;