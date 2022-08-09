import styles from "./css/baselineStats.module.scss";
import globalStyles from "./css/matchStatsDisplay.module.scss";
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

interface BaselineDataProps {
  matchStats: MatchStats;
  checkSuccess: (value: number)  => string;
}

const BaselineStats: React.FC<BaselineDataProps> = ({ matchStats, checkSuccess }) => {

  const winningShotType = {
    labels: ["Forehand", "Forehand Winner", "Backhand", "Backhand Winner"],
    datasets: [
      {
        label: "Winning Shot Type",
        data: [matchStats.pointsWonByForehandOnBaseline, matchStats.pointsWonByForehandWinnerOnBaseline, matchStats.pointsWonByBackhandOnBaseline, matchStats.pointsWonByBackhandWinnerOnBaseline],
        backgroundColor: [
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
    labels: ["Missed Forehand", "Forehand Unforced Error", "Missed Backhand", "Backhand Unforced Error"],
    datasets: [
      {
        label: "Losing Shot Type",
        data: [ matchStats.pointsLostByForehandOnBaseline, matchStats.pointsLostByForehandUnforcedErrorOnBaseline, matchStats.pointsLostByBackhandOnBaseline, matchStats.pointsLostByBackhandUnforcedErrorOnBaseline],
        backgroundColor: [
          "#19e4e2",
          "#79c328",
          "#e0631b",
          "#97101c",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
 responsive: true
  };

  const checkPointsWonByWinner = (value: number) => {
    if (value >= 50) {
      return "#129729";
    }
    else {
      return "#7ae200";
    }
  };

  const checkPointsByUnforcedErrors = (value: number) => {
    if (value < 20) {
      return "#129729";
    } else if (value < 40) {
      return "#7ae200";
    } else if (value < 60) {
      return "#ffe91a";
    }
    else if (value < 70) {
      return "#ff6600";
    }
    else {
      return "#de0000";
    }
  };

  return (
    <div>
      <div className={globalStyles.heading}>Baseline Statistics</div>
      <div className={globalStyles.body}>
        <div className={globalStyles.percentagesRow}>
          <div className={globalStyles.percentagesCol}>
            <div className={globalStyles.percentagesHeading}>Total Points Won On Baseline</div>
            <div className={globalStyles.meter}>
              <Grommet>
                <Meter
                    value={matchStats.percentPointsWonOnBaseline}
                    type="circle"
                    margin="small"
                    size="small"
                    thickness="medium"
                    background="#B2B2B2"
                    color={checkSuccess(matchStats.percentPointsWonOnBaseline)}
                />
              </Grommet>
              <div className={globalStyles.percent}>{matchStats.percentPointsWonOnBaseline}%</div>
            </div>
          </div>
          <div className={globalStyles.percentagesCol}>
            <div className={globalStyles.percentagesHeading}>Baseline Points Won</div>
            <div className={globalStyles.meter}>
              <Grommet>
                <Meter
                    value={matchStats.percentBaselinePointsWon}
                    type="circle"
                    margin="small"
                    size="small"
                    thickness="medium"
                    background="#B2B2B2"
                    color={checkSuccess(matchStats.percentBaselinePointsWon)}
                />
              </Grommet>
              <div className={globalStyles.percent}>{matchStats.percentBaselinePointsWon}%</div>
            </div>
          </div>
          <div className={globalStyles.percentagesCol}>
            <div className={globalStyles.percentagesHeading}>Points Won By Winners</div>
            <div className={globalStyles.meter}>
              <Grommet>
                <Meter
                    value={matchStats.percentPointsWonByWinnersOnBaseline}
                    type="circle"
                    margin="small"
                    size="small"
                    thickness="medium"
                    color={checkPointsWonByWinner(matchStats.percentPointsWonByWinnersOnBaseline)}
                    background="#B2B2B2"
                />
              </Grommet>
              <div className={globalStyles.percent}>{matchStats.percentPointsWonByWinnersOnBaseline}%</div>
            </div>
          </div>
          <div className={globalStyles.percentagesColLastCol}>
            <div className={globalStyles.percentagesHeading}>Points Lost by Unforced Error</div>
            <div className={globalStyles.meter}>
              <Grommet>
                <Meter
                    value={matchStats.percentPointsLostByUnforcedErrorOnBaseline}
                    type="circle"
                    margin="small"
                    size="small"
                    thickness="medium"
                    color={checkPointsByUnforcedErrors(matchStats.percentPointsLostByUnforcedErrorOnBaseline)}
                    background="#B2B2B2"

                />
              </Grommet>
              <div className={globalStyles.percent}>{matchStats.percentPointsLostByUnforcedErrorOnBaseline}%</div>
            </div>
          </div>
        </div>
        <div className={globalStyles.rowHeading}>Baseline Shot Break Down</div>
        <div className={globalStyles.border}></div>
        <div className={styles.row}>
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
          <div className={styles.accuracy}>
            <div className={styles.accuracyCol}>
            <div className={styles.accuracyMeterHeading}>Forehand Accuracy: {matchStats.forehandAccuracyOnBaseline}%</div>
              <div className={styles.meter}>
            <Grommet>
                <Meter
                  value={matchStats.forehandAccuracyOnBaseline}
                  type="circle"
                  margin="small"
                  size="small"
                  thickness="medium"
                  background="#B2B2B2"
                  color={checkSuccess(matchStats.forehandAccuracyOnBaseline)}
                />
            </Grommet>
            </div>
            </div>
            <div className={styles.accuracyCol}>
            <div className={styles.accuracyMeterHeading}>Backhand Accuracy: {matchStats.backhandAccuracyOnBaseline}%</div>
            <div className={styles.meter}>
              <Grommet>
                <Meter
                  value={matchStats.backhandAccuracyOnBaseline}
                  type="circle"
                  margin="small"
                  size="small"
                  thickness="medium"
                  background="#B2B2B2"
                  color={checkSuccess(matchStats.backhandAccuracyOnBaseline)}
                />
              </Grommet>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaselineStats;
