import React from "react";
import {Meter} from "grommet";
import {
    Grommet,
} from "grommet/components";
import styles from "./css/returnDataPanel.module.css";

interface ReturnDataProps {
    state: any;
    checkSuccess: (value: number)  => string;
}

const ReturnData: React.FC<ReturnDataProps> = ({state, checkSuccess}) => {
    const totalReturnPoints =
        +JSON.stringify(state.context.pointsWonOnReturn) +
        +JSON.stringify(state.context.pointsLostOnReturn);

    const totalPoints =
        totalReturnPoints +
        +JSON.stringify(state.context.pointsWonOnServe) +
        +JSON.stringify(state.context.pointsLostOnServe);

    const percentOfReturnPointsWon = +(
        (+JSON.stringify(state.context.pointsWonOnReturn) / totalReturnPoints) *
        100
    ).toPrecision(2);

    const percentOfTotalPointsWonOnReturn = +(
        (+JSON.stringify(state.context.pointsWonOnReturn) / totalPoints) *
        100
    ).toPrecision(2);

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
                                    background="#B2B2B2"
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
                                    background="#B2B2B2"
                                    color={checkSuccess(percentOfReturnPointsWon)}
                                />
                            </Grommet>
                            <div className={styles.percent}>{percentOfReturnPointsWon}%</div>
                        </div>
                    </div>
                    <div className={styles.returnColLastCol}>
                        <div className={styles.returnHeading}>Missed First Serve Returns</div>
                        <div
                            className={styles.numberMissed}>{+JSON.stringify(state.context.missedFirstServeReturns)}</div>
                        <div className={styles.returnHeading}>Missed Second Serve Returns</div>
                        <div
                            className={styles.numberMissed}>{+JSON.stringify(state.context.missedSecondServeReturns)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnData;
