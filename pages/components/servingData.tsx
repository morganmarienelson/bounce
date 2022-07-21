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
import {Pie} from "react-chartjs-2";

interface ServingDataProps {
    state: any;
    checkSuccess: (value: number)  => string;
}

const ServingData: React.FC<ServingDataProps> = ({state, checkSuccess}) => {
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

    const unreturnedServeLocationData = [
        {x: "Alley", y: +JSON.stringify(state.context.notReturnedServesToAlley)},
        {x: "Body", y: +JSON.stringify(state.context.notReturnedServesToBody)},
        {x: "Center", y: +JSON.stringify(state.context.notReturnedServesToCenter)},
    ];

    const totalAces = +JSON.stringify(state.context.acesOnFirstServe) + +JSON.stringify(state.context.acesOnSecondServe);

    const totalNotReturnedFirstServes = +JSON.stringify(state.context.acesOnFirstServe) + +JSON.stringify(state.context.notReturnedFirstServes);

    const totalNotReturnedSecondServes = +JSON.stringify(state.context.acesOnSecondServe) + +JSON.stringify(state.context.notReturnedSecondServes);

    const unreturnedServeLocation = {
        labels: ["Alley", "Body", "Center"],
        datasets: [
            {
                label: "Winning Shot Type",
                data: [  +JSON.stringify(state.context.notReturnedServesToAlley), +JSON.stringify(state.context.notReturnedServesToBody), +JSON.stringify(state.context.notReturnedServesToCenter)],
                backgroundColor: [
                    "#779be7",
                    "#e777d3",
                    "#77e78b",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true
    };


    return (
        <div>
            <div className={styles.heading}>Serving Statistics</div>
            <div className={styles.body}>
                <div className={styles.row}>
                    <div className={styles.returnCol}>
                        <div className={styles.returnHeading}>Total Points Won On Serve</div>
                        <div className={styles.meter}>
                            <Grommet>
                                <Meter
                                    value={percentOfTotalPointsWonOnServe}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="#B2B2B2"
                                    color={checkSuccess(percentOfTotalPointsWonOnServe)}
                                />
                            </Grommet>
                            <div className={styles.percent}>{percentOfTotalPointsWonOnServe}%</div>
                        </div>
                    </div>
                    <div className={styles.returnCol}>
                        <div className={styles.returnHeading}>Serving Points Won</div>
                        <div className={styles.meter}>
                            <Grommet>
                                <Meter
                                    value={percentOfServingPointsWon}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="#B2B2B2"
                                    color={checkSuccess(percentOfServingPointsWon)}
                                />
                            </Grommet>
                            <div className={styles.percent}>{percentOfServingPointsWon}%</div>
                        </div>
                    </div>
                    <div className={styles.returnCol}>
                        <div className={styles.returnHeading}>First Serve Percentage</div>
                        <div className={styles.meter}>
                            <Grommet>
                                <Meter
                                    value={firstServePercentage}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSuccess(firstServePercentage)}
                                    background="#B2B2B2"
                                />
                            </Grommet>
                            <div className={styles.percent}>{firstServePercentage}%</div>
                        </div>
                    </div>
                    <div className={styles.servePercentagesLastRow}>
                        <div className={styles.returnHeading}>Second Serve Percentage</div>
                        <div className={styles.meter}>
                            <Grommet>
                                <Meter
                                    value={secondServePercentage}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSuccess(secondServePercentage)}
                                    background="#B2B2B2"

                                />
                            </Grommet>
                            <div className={styles.percent}>{secondServePercentage}%</div>
                        </div>
                    </div>
                </div>
                <div className={styles.rowHeading}>Unreturned Serves</div>
                <div className={styles.border}></div>
                <div className={styles.unreturnedRow}>
                    <div className={styles.serveTable}>
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
                        <div className={styles.pieChartHeading}>Unreturned Serve Locations</div>
                        <div className={styles.pieChart}>
                            <Pie data={unreturnedServeLocation} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServingData;
