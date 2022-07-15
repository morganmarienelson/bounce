import {Button, Header, Heading, Nav} from "grommet/components";
import "antd/dist/antd.css";
import {Modal} from "antd";
import {Close} from "grommet-icons";
import {Grommet} from "grommet/components";
import React, {useState} from "react";
import styles from "./components/css/matchStats.module.css";
import ServingData from "./components/servingData";
import ReturnData from "./components/returnData";
import BaselineData from "./components/baselineData";

interface MatchStatsProps {
    setShowDashboard: (showDashboard: boolean) => void;
    state: any;
}

const MatchStats: React.FC<MatchStatsProps> = ({setShowDashboard, state}) => {
    const onExit = () => {
        Modal.confirm({
            title:
                "Are you sure that you want to exit? The data for this match has not been saved.",
            okType: "danger",
            onOk: () => {
                setShowDashboard(true);
            },
        });
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
                            style={{marginLeft: 63}}
                            icon={<Close/>}
                            color="#FF5858 "
                            hoverIndicator
                            onClick={onExit}
                        />
                    </Nav>
                </Header>
            </Grommet>
            <div className={styles.fullPage}>
                <ServingData state={state}/>
                <ReturnData state={state}/>
                <BaselineData state={state}/>
            </div>
        </div>
    );
};

export default MatchStats;
