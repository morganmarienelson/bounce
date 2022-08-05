import React from "react";
import {Meter} from "grommet";
import {
    Grommet,
} from "grommet/components";
import styles from "./css/returnStats.module.css";
import globalStyles from "./css/matchStatsDisplay.module.css";

interface ReturnDataProps {
    matchStats: any;
    checkSuccess: (value: number)  => string;
}

const ReturnStats: React.FC<ReturnDataProps> = ({matchStats, checkSuccess}) => {

    return (
        <div>
            <div className={globalStyles.heading}>Return Statistics</div>
            <div className={globalStyles.body}>
                <div className={styles.row}>
                    <div className={styles.returnCol}>
                        <div className={styles.returnHeading}>Total Points Won On Return</div>
                        <div className={styles.meter}>
                            <Grommet>
                                <Meter
                                    value={matchStats.percentOfTotalPointsWonOnReturn}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="#B2B2B2"
                                    color={checkSuccess(matchStats.percentOfTotalPointsWonOnReturn)}
                                />
                            </Grommet>
                            <div className={styles.percent}>{matchStats.percentOfTotalPointsWonOnReturn}%</div>
                        </div>
                    </div>
                    <div className={styles.returnCol}>
                        <div className={styles.returnHeading}>Return Points Won</div>
                        <div className={styles.meter}>
                            <Grommet>
                                <Meter
                                    value={matchStats.percentOfReturnPointsWon}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="#B2B2B2"
                                    color={checkSuccess(matchStats.percentOfReturnPointsWon)}
                                />
                            </Grommet>
                            <div className={styles.percent}>{matchStats.percentOfReturnPointsWon}%</div>
                        </div>
                    </div>
                    <div className={styles.returnColLastCol}>
                        <div className={styles.numberMissedCol}>
                        <div className={styles.missedReturnsHeading}>Missed First Serve Returns:</div>
                        <div
                            className={styles.numberMissed}>{matchStats.missedFirstServeReturns}</div>
                        </div>
                        <div className={styles.numberMissedCol}>
                        <div className={styles.missedReturnsHeading}>Missed Second Serve Returns:</div>
                        <div
                            className={styles.numberMissed}>{matchStats.missedSecondServeReturns}</div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnStats;
