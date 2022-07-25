import {Button, Header, Heading, Nav} from "grommet/components";
import "antd/dist/antd.css";
import {Modal} from "antd";
import { LinkPrevious} from "grommet-icons";
import {Grommet} from "grommet/components";
import React, {useState} from "react";
import styles from "./components/css/matchStats.module.css";
import ServingData from "./components/servingData";
import ReturnData from "./components/returnData";
import BaselineData from "./components/baselineData";
import NetData from "./components/netData";

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
            <Grommet>
                <Header className={styles.header}>
                    <Heading size="medium" className={styles.headingTitle}>
                        Match Statistics
                    </Heading>
                    <Nav direction="column">
                        <Button
                            secondary
                            style={{marginLeft: 63,  transform: 'rotate(180deg)'}}
                            icon={<LinkPrevious color={'white'}/>}
                            hoverIndicator
                            onClick={onExit}
                        />
                    </Nav>
                </Header>
            </Grommet>
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
