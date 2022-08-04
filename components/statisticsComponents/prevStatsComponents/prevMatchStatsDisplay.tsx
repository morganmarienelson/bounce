import "antd/dist/antd.css";
import React from "react";
import styles from "../css/matchStats.module.css";
import PrevServingStats from "./prevServingStats";
import PrevReturnStats from "./prevReturnStats";
import PrevBaselineStats from "./prevBaselineStats";
import PrevNetStats from "./prevNetStats";
import PrevMatchStatsDisplayHeading from "./prevMatchStatsDisplayHeading";

interface PrevMatchStatsProps {
    stats: any
}

const PrevMatchStatsDisplay: React.FC<PrevMatchStatsProps> = ({stats}) => {

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
                <PrevServingStats stats={stats} checkSuccess={checkSuccess}/>
                <PrevReturnStats stats={stats} checkSuccess={checkSuccess}/>
                <PrevBaselineStats stats={stats} checkSuccess={checkSuccess}/>
                <PrevNetStats stats={stats} checkSuccess={checkSuccess}/>
            </div>
        </div>
        </>
    );
};

export default PrevMatchStatsDisplay;
