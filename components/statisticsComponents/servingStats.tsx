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
import styles from "../../css/statistics/serveStats.module.css";
import globalStyles from "../../css/statistics/matchStatsDisplay.module.scss";
import {Pie} from "react-chartjs-2";
import {MatchStats} from "../../types/matchStats";

interface ServingDataProps {
    matchStats: MatchStats;
    checkSuccess: (value: number)  => string;
}

const ServingStats: React.FC<ServingDataProps> = ({matchStats, checkSuccess}) => {

    const unreturnedServeLocation = {
        labels: ["Alley", "Body", "Center"],
        datasets: [
            {
                label: "Winning Shot Type",
                data: [  matchStats.notReturnedServesToAlley, matchStats.notReturnedServesToBody, matchStats.notReturnedServesToCenter],
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
                                    value={matchStats.percentOfTotalPointsWonOnServe}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="#B2B2B2"
                                    color={checkSuccess(matchStats.percentOfTotalPointsWonOnServe)}
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{matchStats.percentOfTotalPointsWonOnServe}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesCol}>
                        <div className={globalStyles.percentagesHeading}>Serving Points Won</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={matchStats.percentOfServingPointsWon}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="#B2B2B2"
                                    color={checkSuccess(matchStats.percentOfServingPointsWon)}
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{matchStats.percentOfServingPointsWon}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesCol}>
                        <div className={globalStyles.percentagesHeading}>First Serve Percentage</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={matchStats.firstServePercentage}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkFirstServeSuccess(matchStats.firstServePercentage)}
                                    background="#B2B2B2"
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{matchStats.firstServePercentage}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesColLastCol}>
                        <div className={globalStyles.percentagesHeading}>Second Serve Percentage</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={matchStats.secondServePercentage}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSecondServeSuccess(matchStats.secondServePercentage)}
                                    background="#B2B2B2"

                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{matchStats.secondServePercentage}%</div>
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
                                        {matchStats.totalAces}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableCell}> Deuce Side</div>
                                    </TableCell>
                                    <TableCell>
                                        {matchStats.notReturnedServesDeuceSide}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableCell}> Ad Side</div>
                                    </TableCell>
                                    <TableCell>
                                        {matchStats.notReturnedServesAdSide}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableCell}> First Serves</div>
                                    </TableCell>
                                    <TableCell>
                                        {matchStats.totalNotReturnedFirstServes}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableCell}> Second Serves</div>
                                    </TableCell>
                                    <TableCell>
                                        {matchStats.totalNotReturnedSecondServes}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <div className={styles.tableTotal}>Total Points Won By Unreturned Serves</div>
                                    </TableCell>
                                    <TableCell>
                                        {matchStats.totalNotReturnedServes}
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

export default ServingStats;
