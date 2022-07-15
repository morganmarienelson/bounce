import React from "react";
import {Meter} from "grommet";
import {
    Grommet,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    Table,
} from "grommet/components";
import styles from "./css/serveDataPanel.module.css";
import {VictoryPie} from "victory-pie";

interface ServingDataProps {
    state: any;
}

const ServingData: React.FC<ServingDataProps> = ({state}) => {
    const totalServePoints =
        +JSON.stringify(state.context.pointsWonOnServe) +
        +JSON.stringify(state.context.pointsLostOnServe);

    const totalPoints =
        totalServePoints +
        +JSON.stringify(state.context.pointsWonOnReturn) +
        +JSON.stringify(state.context.pointsLostOnReturn);

    const percentOfServingPointsWon = +(
        (+JSON.stringify(state.context.pointsWonOnServe) / totalServePoints) *
        100
    ).toPrecision(2);

    const percentOfTotalPointsWonOnServe = +(
        (+JSON.stringify(state.context.pointsWonOnServe) / totalPoints) *
        100
    ).toPrecision(2);

    const firstServePercentage = +(
        (+JSON.stringify(state.context.madeFirstServes) / totalServePoints) *
        100
    ).toPrecision(2);

    const totalHitSecondServes =
        +JSON.stringify(state.context.madeSecondServes) +
        +JSON.stringify(state.context.doubleFaults);

    const secondServePercentage = +(
        (+JSON.stringify(state.context.madeSecondServes) / totalHitSecondServes) *
        100
    ).toPrecision(2);

    const totalNotReturnedServes =
        +JSON.stringify(state.context.notReturnedFirstServes) +
        +JSON.stringify(state.context.notReturnedSecondServes) +
        +JSON.stringify(state.context.acesOnSecondServe) +
        +JSON.stringify(state.context.acesOnFirstServe);


    const percentNotReturnedServesToCenter = +(
        (+JSON.stringify(state.context.notReturnedServesToCenter) /
            totalNotReturnedServes) *
        100
    ).toPrecision(2);

    const percentNotReturnedServesToBody = +(
        (+JSON.stringify(state.context.notReturnedServesToBody) /
            totalNotReturnedServes) *
        100
    ).toPrecision(2);


    const unreturnedServeLocationData = [
        {x: "Alley", y: +JSON.stringify(state.context.notReturnedServesToAlley)},
        {x: "Body", y: +JSON.stringify(state.context.notReturnedServesToBody)},
        {x: "Center", y: +JSON.stringify(state.context.notReturnedServesToCenter)},
    ];

    const totalAces = +JSON.stringify(state.context.acesOnFirstServe) + +JSON.stringify(state.context.acesOnSecondServe);

    const totalNotReturnedFirstServes = +JSON.stringify(state.context.acesOnFirstServe) + +JSON.stringify(state.context.notReturnedFirstServes);

    const totalNotReturnedSecondServes = +JSON.stringify(state.context.acesOnSecondServe) + +JSON.stringify(state.context.notReturnedSecondServes);

    const checkSuccess = (value: number) => {
        if (value >= 75) {
            return "#69E53B";
        } else if (value > 50) {
            return " #EEFB46";
        } else {
            return "red";
        }
    };

    return (
        <div className={styles.fullPage}>
            <div className={styles.heading}>Serving Statistics</div>
            <div className={styles.body}>
                <div className={styles.row}>
                    <div className={styles.servePercentages}>
                        <div className={styles.percentHeading}>Total Points Won On Serve</div>
                        <div className={styles.locationChart}>
                            <Grommet>
                                <Meter
                                    value={percentOfTotalPointsWonOnServe}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSuccess(percentOfTotalPointsWonOnServe)}
                                />
                            </Grommet>
                        </div>
                    </div>
                    <div className={styles.servePercentages}>
                        <div className={styles.percentHeading}>Serving Points Won</div>
                        <div className={styles.locationChart}>
                            <Grommet>
                                <Meter
                                    value={percentOfServingPointsWon}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSuccess(percentOfServingPointsWon)}
                                />
                            </Grommet>
                        </div>
                    </div>
                    <div className={styles.servePercentages}>
                        <div className={styles.percentHeading}>First Serve Percentage</div>
                        <div className={styles.locationChart}>
                            <Grommet>
                                <Meter
                                    value={firstServePercentage}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSuccess(firstServePercentage)}
                                />
                            </Grommet>
                        </div>
                    </div>
                    <div className={styles.servePercentagesLastRow}>
                        <div className={styles.percentHeading}>Second Serve Percentage</div>
                        <div className={styles.locationChart}>
                            <Grommet>
                                <Meter
                                    value={secondServePercentage}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSuccess(secondServePercentage)}
                                />
                            </Grommet>
                        </div>
                    </div>
                </div>
                <div className={styles.rowHeading}>Unreturned Serves</div>
                <div className={styles.unreturnedRow}>
                    <div className={styles.serveTable}>
                        <Table className={styles.table}>
                            <TableHeader>
                                <TableRow>
                                    <TableCell scope="col" border="bottom">
                                        Type
                                    </TableCell>
                                    <TableCell scope="col" border="bottom">
                                        Value
                                    </TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableCell}>Aces</div>
                                    </TableCell>
                                    <TableCell>
                                        {totalAces}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableCell}> Deuce Side</div>
                                    </TableCell>
                                    <TableCell>
                                        {+JSON.stringify(state.context.notReturnedServesDeuceSide)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableCell}> Ad Side</div>
                                    </TableCell>
                                    <TableCell>
                                        {+JSON.stringify(state.context.notReturnedServesAdSide)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableCell}> First Serves</div>
                                    </TableCell>
                                    <TableCell>
                                        {totalNotReturnedFirstServes}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableCell}> Second Serves</div>
                                    </TableCell>
                                    <TableCell>
                                        {totalNotReturnedSecondServes}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableTotal}>Total Points Won By Unreturned Serves</div>
                                    </TableCell>
                                    <TableCell>
                                        {totalNotReturnedServes}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>.
                    </div>
                    <div className={styles.percentRow}>
                        <VictoryPie
                            data={unreturnedServeLocationData}
                            colorScale={["blue", "yellow", "red"]}
                            radius={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServingData;
