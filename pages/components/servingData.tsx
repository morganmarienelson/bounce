import React from "react";
import {Meter} from "grommet";
import {Grommet, TableBody, TableCell, TableHeader, TableRow, Table, Chart, Box, Heading} from "grommet/components";
import styles from "./css/serveDataPanel.module.css";
import {Progress} from "antd";

interface ServingDataProps {
    state: any;
}

const ServingData: React.FC<ServingDataProps> = ({state}) => {
    const totalServePoints =
        +JSON.stringify(state.context.pointsWonOnServe) +
        +JSON.stringify(state.context.pointsLostOnServe);

    const totalPoints = totalServePoints + +JSON.stringify(state.context.pointsWonOnReturn) +
        +JSON.stringify(state.context.pointsLostOnReturn);

    const percentOfServingPointsWon =
        +((+JSON.stringify(state.context.pointsWonOnServe) / (totalServePoints)) * 100).toPrecision(2);

    const percentOfTotalPointsWonOnServe = +((+JSON.stringify(state.context.pointsWonOnServe) / (totalServePoints)) * 100).toPrecision(2);

    const firstServePercentage =
        +((+JSON.stringify(state.context.madeFirstServes) / (totalServePoints)) * 100).toPrecision(2);

    const totalHitSecondServes = +JSON.stringify(state.context.madeSecondServes) + +JSON.stringify(state.context.doubleFaults);

    const secondServePercentage = +((+JSON.stringify(state.context.madeSecondServes) / (totalHitSecondServes)) * 100).toPrecision(2);

    const totalNotReturnedServes =
        +JSON.stringify(state.context.notReturnedFirstServes) +
        +JSON.stringify(state.context.notReturnedSecondServes) +
        +JSON.stringify(state.context.acesOnSecondServe)
        + +JSON.stringify(state.context.acesOnFirstServe);

    const percentNotReturnedServesToAlley = +(+JSON.stringify(state.context.notReturnedServesToAlley) / totalNotReturnedServes * 100).toPrecision(2);

    const percentNotReturnedServesToCenter = +(+JSON.stringify(state.context.notReturnedServesToCente) / totalNotReturnedServes * 100).toPrecision(2);

    const percentNotReturnedServesToBody = +(+JSON.stringify(state.context.notReturnedServesToBody) / totalNotReturnedServes * 100).toPrecision(2);

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
        <div>
            <h1>Serving Statistics</h1>
            <div className={styles.row}>
                <div className={styles.servePercentages}>
                    <h4>Percent of Total Points Won On Serve</h4>
                    <h1>{percentOfTotalPointsWonOnServe}%</h1>
                </div>
                <div className={styles.servePercentages}>
                    <h4>Percent of Serving Points Won</h4>
                    <h1>{percentOfServingPointsWon}%</h1>
                </div>
                <div className={styles.servePercentages}>
                    <h4>First Serve Percentage</h4>
                    <h1>{firstServePercentage}%</h1>
                </div>
                <div className={styles.servePercentages}>
                    <h4>Second Serve Percentage</h4>
                    <h1>{secondServePercentage}%</h1>
                </div>
            </div>
            <div className={styles.unreturnedRow}>
                <div className={styles.twoCol}>
                    <h2>Unreturned Serves</h2>
                    <Table>
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
                                    <div className={styles.tableCell}> Aces
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {+JSON.stringify(state.context.notReturnedServesSecondServes)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell scope="row">
                                    <div className={styles.tableCell}> Not Returned
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {+JSON.stringify(state.context.notReturnedServesSecondServes)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell scope="row">
                                    <div className={styles.tableCell}> Deuce Side
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {+JSON.stringify(state.context.notReturnedServesDeuceSide)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell scope="row">
                                    <div className={styles.tableCell}> Ad Side
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {+JSON.stringify(state.context.notReturnedServesAdSide)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell scope="row">
                                    <div className={styles.tableCell}> First Serves
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {+JSON.stringify(state.context.notReturnedServesFirstServes)}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell scope="row">
                                    <div className={styles.tableCell}> Second Serves
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {+JSON.stringify(state.context.notReturnedServesSecondServes)}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className={styles.servePercentages}>
                    <Grommet>
                        <h3>Alley</h3>
                        <Meter
                            values={[{
                                value: percentNotReturnedServesToAlley,
                            }]}
                            type="circle"
                            margin="small"
                            size="small"
                            thickness="medium"
                            color={checkSuccess(percentNotReturnedServesToAlley)}
                        />
                    </Grommet>
                </div>
                <div className={styles.servePercentages}>
                    <Grommet>
                        <h3>Body</h3>
                        <Meter
                            values={[{
                                value: percentNotReturnedServesToBody,
                            }]}
                            type="circle"
                            margin="small"
                            size="small"
                            thickness="medium"
                            color={checkSuccess(percentNotReturnedServesToBody)}
                        />
                    </Grommet>
                </div>
                <div className={styles.servePercentages}>
                    <Grommet>
                        <h3>Center</h3>
                        <Meter
                            values={[{
                                value: percentNotReturnedServesToCenter,
                            }]}
                            type="circle"
                            margin="small"
                            size="small"
                            thickness="medium"
                            color={checkSuccess(percentNotReturnedServesToCenter)}
                        />
                    </Grommet>
                </div>
            </div>
        </div>
    );
};

export default ServingData;
