import "antd/dist/antd.css";
import {Modal} from "antd";
import React from "react";
import styles from "./css/matchStats.module.css";
import ServingData from "./statisticsSections/servingData";
import ReturnData from "./statisticsSections/returnData";
import BaselineData from "./statisticsSections/baselineData";
import NetData from "./statisticsSections/netData";

interface MatchStatsProps {
    setShowDashboard: (showDashboard: boolean) => void;
    state: any;
}

const MatchStats: React.FC<MatchStatsProps> = ({setShowDashboard, state}) => {
    const onExit = () => {
        Modal.confirm({
            title:
                "Are you sure that you want to exit? You will go back to recording data for this match.",
            okType: "danger",
            onOk: () => {
                setShowDashboard(true);
            },
        });
    };

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
        <div>
            <div className={styles.fullPage}>
                <ServingData state={state} checkSuccess={checkSuccess}/>
                <ReturnData state={state} checkSuccess={checkSuccess}/>
                <BaselineData state={state} checkSuccess={checkSuccess}/>
                <NetData state={state} checkSuccess={checkSuccess}/>
            </div>
        </div>
    );
};

export default MatchStats;