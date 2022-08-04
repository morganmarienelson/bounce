import styles from "../css/netDataPanel.module.css";
import React from 'react';
import {
    Grommet,
} from "grommet/components";
import { Meter } from "grommet";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
import globalStyles from "../../dashboardComponents/css/pointDashboard.module.css";
Chart.register(ArcElement);

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

interface NetDataProps {
    state: any;
    checkSuccess: (value: number)  => string;
}

const NewNetStats: React.FC<NetDataProps> = ({ state, checkSuccess }) => {
    const totalPoints =
        +JSON.stringify(state.context.pointsWonOnServe) +
        +JSON.stringify(state.context.pointsLostOnServe) +
        +JSON.stringify(state.context.pointsWonOnReturn) +
        +JSON.stringify(state.context.pointsLostOnReturn);

    const totalNetPointsWon = +(
        +JSON.stringify(state.context.pointsWonByForehandVolley) +
        +JSON.stringify(state.context.pointsWonByBackhandVolley) +
        +JSON.stringify(state.context.pointsWonByForehandVolleyWinner) +
        +JSON.stringify(state.context.pointsWonByBackhandVolley) +
        +JSON.stringify(state.context.pointsWonByOverhead) +
        +JSON.stringify(state.context.pointsWonByOverheadWinner)
    );

    const totalNetPointsLost = +(
        +JSON.stringify(state.context.pointsLostByForehandVolley) +
        +JSON.stringify(state.context.pointsLostByBackhandVolley) +
        +JSON.stringify(state.context.pointsLostByForehandVolleyUnforcedError) +
        +JSON.stringify(state.context.pointsLostByBackhandVolleyUnforcedError) +
        +JSON.stringify(state.context.pointsLostByOverhead) +
        +JSON.stringify(state.context.pointsLostByOverheadUnforcedError)
    );

    const percentPointsWonAtNet = +(totalNetPointsWon/totalPoints * 100).toPrecision(2);

    const percentNetPointsWon = +(totalNetPointsWon/(totalNetPointsWon + totalNetPointsLost) * 100).toPrecision(2);

    const percentPointsWonByWinners = +(  (  +JSON.stringify(state.context.pointsWonByForehandVolleyWinner) +
        +JSON.stringify(state.context.pointsWonByBackhandVolleyWinner) +         +JSON.stringify(state.context.pointsWonByOverheadWinner) )/(totalNetPointsWon) * 100).toPrecision(2);

    const percentPointsLostByUnforcedError = +(  (  +JSON.stringify(state.context.pointsLostByForehandVolleyUnforcedError) +
        +JSON.stringify(state.context.pointsLostByBackhandVolleyUnforcedError) + +JSON.stringify(state.context.pointsLostByOverheadUnforcedError))/(totalNetPointsLost) * 100).toPrecision(2);

    const totalForehandVolleys =
        +JSON.stringify(state.context.pointsWonByForehandVolley) +
        +JSON.stringify(
            state.context.pointsLostByForehandVolley +
            +JSON.stringify(state.context.pointsWonByForehandVolleyWinner) +
            +JSON.stringify(state.context.pointsLostByForehandVolleyUnforcedError)
        );

    const totalWinningForehandVolleys =
        +JSON.stringify(state.context.pointsWonByForehandVolley) +
        +JSON.stringify(state.context.pointsWonByForehandVolleyWinner);

    const forehandVolleyAccuracy = +(
        (totalWinningForehandVolleys / totalForehandVolleys) *
        100
    ).toPrecision(2);

    const totalBackhandVolleys =
        +JSON.stringify(state.context.pointsWonByBackhandVolley) +
        +JSON.stringify(state.context.pointsLostByBackhandVolley) +
        +JSON.stringify(state.context.pointsLostByBackhandVolleyUnforcedError) +
        +JSON.stringify(state.context.pointsWonByBackhandVolleyWinner);

    const totalWinningBackhandVolleys =
        +JSON.stringify(state.context.pointsWonByBackhandVolley) +
        +JSON.stringify(state.context.pointsWonByBackhandVolleyWinner);

    const backhandVolleyAccuracy = +(
        (totalWinningBackhandVolleys / totalBackhandVolleys) *
        100
    ).toPrecision(2);

    const totalOverheads=
        +JSON.stringify(state.context.pointsWonByOverhead) +
        +JSON.stringify(state.context.pointsLostByOverhead) +
        +JSON.stringify(state.context.pointsWonByOverheadWinner) +
        +JSON.stringify(state.context.pointsLostByOverheadUnforcedError);

    const totalWinningOverheads =
        +JSON.stringify(state.context.pointsWonByOverhead) +
        +JSON.stringify(state.context.pointsWonByOverheadWinner);

    const overheadAccuracy = +(
        (totalWinningOverheads / totalOverheads) *
        100
    ).toPrecision(2);

    const winningShotType = {
        labels: ["Forehand Volley", "Forehand Volley Winner", "Backhand Volley", "Backhand Volley Winner", "Overhead", "Overhead Winner"],
        datasets: [
            {
                label: "Winning Shot Type",
                data: [ +JSON.stringify(state.context.pointsWonByForehandVolley), +JSON.stringify(state.context.pointsWonByForehandVolleyWinner), +JSON.stringify(state.context.pointsWonByBackhandVolley), +JSON.stringify(state.context.pointsWonByBackhandVolleyWinner), +JSON.stringify(state.context.pointsWonByOverhead), +JSON.stringify(state.context.pointsWonByOverheadWinner)],
                backgroundColor: [
                    "#779be7",
                    "#e777d3",
                    "#77e78b",
                    "#e7c377",
                    "#dd7880",
                    "#4b6292",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const losingShotType = {
        labels: ["Forehand Volley", "Forehand Volley Unforced Error", "Backhand Volley", "Backhand Volley Unforced Error", "Overhead", "Overhead Unforced Error"],
        datasets: [
            {
                label: "Winning Shot Type",
                data: [ +JSON.stringify(state.context.pointsLostByForehandVolley), +JSON.stringify(state.context.pointsLostByForehandVolleyUnforcedError), +JSON.stringify(state.context.pointsLostByBackhandVolley), +JSON.stringify(state.context.pointsLostByBackhandUnforcedError), +JSON.stringify(state.context.pointsLostByOverhead), +JSON.stringify(state.context.pointsLostByOverheadUnforcedError)],
                backgroundColor: [
                    "#19e4e2",
                    "#79c328",
                    "#e0631b",
                    "#97101c",
                    "#ff8600",
                    "#cc0c0c",
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
            <div className={globalStyles.heading}>Net Statistics</div>
            <div className={globalStyles.body}>
                <div className={globalStyles.percentagesRow}>
                    <div className={globalStyles.percentagesCol}>
                        <div className={globalStyles.percentagesHeading}>Total Points Won On Net</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={percentPointsWonAtNet}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="components/statisticsComponents/newStatsComponents/newNetStats#B2B2B2"
                                    color={checkSuccess(percentPointsWonAtNet)}
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{percentPointsWonAtNet}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesCol}>
                        <div className={globalStyles.percentagesHeading}>Net Points Won</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={percentNetPointsWon}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="components/statisticsComponents/newStatsComponents/newNetStats#B2B2B2"
                                    color={checkSuccess(percentNetPointsWon)}
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{percentNetPointsWon}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesCol}>
                        <div className={globalStyles.percentagesHeading}>Net Points Won By Winners</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={percentPointsWonByWinners}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSuccess(percentPointsWonByWinners)}
                                    background="components/statisticsComponents/newStatsComponents/newNetStats#B2B2B2"
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{percentPointsWonByWinners}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesColLastCol}>
                        <div className={globalStyles.percentagesHeading}>Net Points Lost by Unforced Error</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={percentPointsLostByUnforcedError}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSuccess(percentPointsLostByUnforcedError)}
                                    background="components/statisticsComponents/newStatsComponents/newNetStats#B2B2B2"

                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{percentPointsLostByUnforcedError}%</div>
                        </div>
                    </div>
                </div>
                <div className={globalStyles.rowHeading}>Net Shot Break Down</div>
                <div className={styles.border}></div>
                <div className={styles.secondRow}>
                    <div className={styles.doughnutChartCol}>
                        <div className={styles.pieHeader}>Winning Shot Types</div>
                        <div className={styles.doughnutChart}>
                            <Pie data={winningShotType} options={options} />
                        </div>
                    </div>
                    <div className={styles.doughnutChartCol}>
                        <div className={styles.pieHeader}>Losing Shot Types</div>
                        <div className={styles.doughnutChart}>
                            <Pie data={losingShotType} options={options} />
                        </div>
                    </div>
                </div>
                <div className={globalStyles.border}></div>
                    <div className={styles.thirdRow}>
                        <div>
                            <div className={styles.accuracyMeterHeading}>Forehand Volley Accuracy: {forehandVolleyAccuracy}%</div>
                            <div className={styles.meter}>
                                <Grommet>
                                    <Meter
                                        value={forehandVolleyAccuracy}
                                        type="circle"
                                        margin="small"
                                        size="small"
                                        thickness="medium"
                                        background="components/statisticsComponents/newStatsComponents/newNetStats#B2B2B2"
                                        color={checkSuccess(forehandVolleyAccuracy)}
                                    />
                                </Grommet>
                            </div>
                        </div>
                        <div>
                            <div className={styles.accuracyMeterHeading}>Backhand Volley Accuracy: {backhandVolleyAccuracy}%  </div>
                            <div className={styles.meter}>
                                <Grommet>
                                    <Meter
                                        value={backhandVolleyAccuracy}
                                        type="circle"
                                        margin="small"
                                        size="small"
                                        thickness="medium"
                                        background="components/statisticsComponents/newStatsComponents/newNetStats#B2B2B2"
                                        color={checkSuccess(backhandVolleyAccuracy)}
                                    />
                                </Grommet>
                            </div>
                        </div>
                        <div>
                            <div className={styles.accuracyMeterHeading}>Overhead Accuracy: {overheadAccuracy}%</div>
                            <div className={styles.meter}>
                                <Grommet>
                                    <Meter
                                        value={overheadAccuracy}
                                        type="circle"
                                        margin="small"
                                        size="small"
                                        thickness="medium"
                                        color={checkSuccess(overheadAccuracy)}
                                        background="components/statisticsComponents/newStatsComponents/newNetStats#B2B2B2"
                                    />
                                </Grommet>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default NewNetStats;
