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
import globalStyles from "./css/pointDashboard.module.css";
import {Pie} from "react-chartjs-2";

interface MatchOverviewProps {
    state: any;
    checkSuccess: (value: number)  => string;
}

const ServingData: React.FC<MatchOverviewProps> = ({state, checkSuccess}) => {

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
                                    background="#B2B2B2"
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
                                    background="#B2B2B2"
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
                                    background="#B2B2B2"
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
                                    background="#B2B2B2"

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

export default ServingData;
