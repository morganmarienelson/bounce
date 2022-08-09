import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import PrevMatchStatsDisplayHeading
    from "../../../components/statisticsComponents/prevStatsComponents/prevMatchStatsDisplayHeading";
import styles from "../../../css/statistics/matchStatsDisplay.module.scss"
import ServingStats from "../../../components/statisticsComponents/servingStats";
import ReturnStats from "../../../components/statisticsComponents/returnStats";
import BaselineStats from "../../../components/statisticsComponents/baselineStats";
import NetStats from "../../../components/statisticsComponents/netStats";
import React from "react";
import {MatchDetailsInit} from "../../../enums/matchDetailsInit";
import BackToHomePanel from "../../../components/statisticsComponents/prevStatsComponents/backToHomePanel";

function MatchDetails(){
    const router = useRouter();
    const [stats, setStats] = useState(
        MatchDetailsInit
    );

    useEffect(() => {
        const fetchData = async () => {
            const matchId = router.query.matchId
            const response = await fetch(`/api/match/${matchId}`, {
                method: 'GET'
            })
            const data = await response.json()
            setStats(data);
        }
        fetchData();
    }, )

    const checkSuccess = (value: number) => {
        if (value >= 85) {
            return "#129729";
        } else if (value > 70) {
            return "#7ae200";
        } else if (value > 60) {
            return "#ffe91a";
        }
        else if (value > 50) {
            return "#ff6600";
        }
        else {
            return "#de0000";
        }
    };


    return (
        <>
            <PrevMatchStatsDisplayHeading stats={stats}/>
            <div>
                <div className={styles.fullPage}>
                    <ServingStats matchStats={stats} checkSuccess={checkSuccess}/>
                    <ReturnStats matchStats={stats} checkSuccess={checkSuccess}/>
                    <BaselineStats matchStats={stats} checkSuccess={checkSuccess}/>
                    <NetStats matchStats={stats} checkSuccess={checkSuccess}/>
                    <BackToHomePanel/>
                </div>
            </div>
        </>
    );
}

export default MatchDetails