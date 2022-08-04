import React from "react";
import {Meter} from "grommet";
import {
    Grommet,
} from "grommet/components";
import styles from "../css/returnDataPanel.module.css";

interface PrevReturnStatsProps {
    stats: any;
    checkSuccess: (value: number)  => string;
}

const PrevReturnStats: React.FC<PrevReturnStatsProps> = ({stats, checkSuccess}) => {
    const percentOfTotalPointsWonOnReturn = stats.percentOfTotalPointsWonOnReturn;
    const percentOfReturnPointsWon= stats.percentOfReturnPointsWon;



    return (
        <div>
            <div className={styles.heading}>Return Statistics</div>
            <div className={styles.body}>
                <div className={styles.row}>
                    <div className={styles.returnCol}>
                        <div className={styles.returnHeading}>Total Points Won On Return</div>
                        <div className={styles.meter}>
                            <Grommet>
                                <Meter
                                    value={percentOfTotalPointsWonOnReturn}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="components/statisticsComponents/newStatsComponents/newReturnData#B2B2B2"
                                    color={checkSuccess(percentOfTotalPointsWonOnReturn)}
                                />
                            </Grommet>
                            <div className={styles.percent}>{percentOfTotalPointsWonOnReturn}%</div>
                        </div>
                    </div>
                    <div className={styles.returnCol}>
                        <div className={styles.returnHeading}>Return Points Won</div>
                        <div className={styles.meter}>
                            <Grommet>
                                <Meter
                                    value={percentOfReturnPointsWon}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="components/statisticsComponents/newStatsComponents/newReturnData#B2B2B2"
                                    color={checkSuccess(percentOfReturnPointsWon)}
                                />
                            </Grommet>
                            <div className={styles.percent}>{percentOfReturnPointsWon}%</div>
                        </div>
                    </div>
                    <div className={styles.returnColLastCol}>
                        <div className={styles.numberMissedCol}>
                            <div className={styles.missedReturnsHeading}>Missed First Serve Returns:</div>
                            <div
                                className={styles.numberMissed}>{stats.missedFirstServeReturns}</div>
                        </div>
                        <div className={styles.numberMissedCol}>
                            <div className={styles.missedReturnsHeading}>Missed Second Serve Returns:</div>
                            <div
                                className={styles.numberMissed}>{stats.missedSecondServeReturns}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrevReturnStats;
