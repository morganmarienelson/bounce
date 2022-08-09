import styles from "../../css/statistics/netStats.module.css";
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
import globalStyles from "../../css/statistics/matchStatsDisplay.module.scss"
import {MatchStats} from "../../types/matchStats";

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
    matchStats: MatchStats;
    checkSuccess: (value: number)  => string;
}

const NetStats: React.FC<NetDataProps> = ({ matchStats, checkSuccess }) => {
    const winningShotType = {
        labels: ["Forehand Volley", "Forehand Volley Winner", "Backhand Volley", "Backhand Volley Winner", "Overhead", "Overhead Winner"],
        datasets: [
            {
                label: "Winning Shot Type",
                data: [ matchStats.pointsWonByForehandVolley, matchStats.pointsWonByForehandVolleyWinner, matchStats.pointsWonByBackhandVolley, matchStats.pointsWonByBackhandVolleyWinner, matchStats.pointsWonByOverhead, matchStats.pointsWonByOverheadWinner],
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
                data: [ matchStats.pointsLostByForehandVolley, matchStats.pointsLostByForehandVolleyUnforcedError, matchStats.pointsLostByBackhandVolley,matchStats.pointsLostByBackhandVolleyUnforcedError, matchStats.pointsLostByOverhead, matchStats.pointsLostByOverheadUnforcedError],
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
                                    value={matchStats.percentPointsWonAtNet}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="#B2B2B2"
                                    color={checkSuccess(matchStats.percentPointsWonAtNet)}
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{matchStats.percentPointsWonAtNet}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesCol}>
                        <div className={globalStyles.percentagesHeading}>Net Points Won</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={matchStats.percentNetPointsWon}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    background="#B2B2B2"
                                    color={checkSuccess(matchStats.percentNetPointsWon)}
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{matchStats.percentNetPointsWon}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesCol}>
                        <div className={globalStyles.percentagesHeading}>Net Points Won By Winners</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={matchStats.percentPointsWonByWinnersAtNet}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSuccess(matchStats.percentPointsWonByWinnersAtNet)}
                                    background="#B2B2B2"
                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{matchStats.percentPointsWonByWinnersAtNet}%</div>
                        </div>
                    </div>
                    <div className={globalStyles.percentagesColLastCol}>
                        <div className={globalStyles.percentagesHeading}>Net Points Lost by Unforced Error</div>
                        <div className={globalStyles.meter}>
                            <Grommet>
                                <Meter
                                    value={matchStats.percentPointsLostByUnforcedErrorAtNet}
                                    type="circle"
                                    margin="small"
                                    size="small"
                                    thickness="medium"
                                    color={checkSuccess(matchStats.percentPointsLostByUnforcedErrorAtNet)}
                                    background="#B2B2B2"

                                />
                            </Grommet>
                            <div className={globalStyles.percent}>{matchStats.percentPointsLostByUnforcedErrorAtNet}%</div>
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
                            <div className={styles.accuracyMeterHeading}>Forehand Volley Accuracy: {matchStats.forehandVolleyAccuracy}%</div>
                            <div className={styles.meter}>
                                <Grommet>
                                    <Meter
                                        value={matchStats.forehandVolleyAccuracy}
                                        type="circle"
                                        margin="small"
                                        size="small"
                                        thickness="medium"
                                        background="#B2B2B2"
                                        color={checkSuccess(matchStats.forehandVolleyAccuracy)}
                                    />
                                </Grommet>
                            </div>
                        </div>
                        <div>
                            <div className={styles.accuracyMeterHeading}>Backhand Volley Accuracy: {matchStats.backhandVolleyAccuracy}%  </div>
                            <div className={styles.meter}>
                                <Grommet>
                                    <Meter
                                        value={matchStats.backhandVolleyAccuracy}
                                        type="circle"
                                        margin="small"
                                        size="small"
                                        thickness="medium"
                                        background="#B2B2B2"
                                        color={checkSuccess(matchStats.backhandVolleyAccuracy)}
                                    />
                                </Grommet>
                            </div>
                        </div>
                        <div>
                            <div className={styles.accuracyMeterHeading}>Overhead Accuracy: {matchStats.overheadAccuracy}%</div>
                            <div className={styles.meter}>
                                <Grommet>
                                    <Meter
                                        value={matchStats.overheadAccuracy}
                                        type="circle"
                                        margin="small"
                                        size="small"
                                        thickness="medium"
                                        color={checkSuccess(matchStats.overheadAccuracy)}
                                        background="#B2B2B2"
                                    />
                                </Grommet>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default NetStats;
