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
import styles from "../css/serveDataPanel.module.css";
import globalStyles from "../../dashboardComponents/css/pointDashboard.module.css";
import {Pie} from "react-chartjs-2";

interface ServingDataProps {
    state: any;
    checkSuccess: (value: number)  => string;
}

const NewServingStats: React.FC<ServingDataProps> = ({state, checkSuccess}) => {
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

    const checkFirstServeSuccess = (value: number) => {
        if (value >= 90) {
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

    const checkSecondServeSuccess = (value: number) => {
        if (value >= 90) {
            return "#129729";
        } else if (value > 80) {
            return "#7ae200";
        } else if (value > 70) {
            return "#ffe91a";
        }
        else if (value > 60) {
            return "#ff6600";
        }
        else {
            return "#de0000";
        }
    };


    return (
        <div>
            <div className={globalStyles.heading}>Serving Statistics</div>
            <div className={globalStyles.body}>
                <div className={globalStyles.percentagesRow}>
                    <div className={globalStyles.percentagesCol}>
                        <div className={globalStyles.percentagesHeading}>Total Points Won On Serve</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={percentOfTotalPointsWonOnServe}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="components/statisticsComponents/newStatsComponents/newServingStats#B2B2B2"
                                    color={checkSuccess(percentOfTotalPointsWonOnServe)}
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{percentOfTotalPointsWonOnServe}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesCol}>
                        <div className={globalStyles.percentagesHeading}>Serving Points Won</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={percentOfServingPointsWon}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="components/statisticsComponents/newStatsComponents/newServingStats#B2B2B2"
                                    color={checkSuccess(percentOfServingPointsWon)}
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{percentOfServingPointsWon}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesCol}>
                        <div className={globalStyles.percentagesHeading}>First Serve Percentage</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={firstServePercentage}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkFirstServeSuccess(firstServePercentage)}
                                    background="components/statisticsComponents/newStatsComponents/newServingStats#B2B2B2"
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{firstServePercentage}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesColLastCol}>
                        <div className={globalStyles.percentagesHeading}>Second Serve Percentage</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={secondServePercentage}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSecondServeSuccess(secondServePercentage)}
                                    background="components/statisticsComponents/newStatsComponents/newServingStats#B2B2B2"

                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{secondServePercentage}%</div>
                        </div>
                    </div>
                </div>
                <div className={globalStyles.rowHeading}>Unreturned Serves</div>
                <div className={globalStyles.border}></div>
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

export default NewServingStats;
