import styles from "./css/baselineDataPanel.module.css";
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
  state: any;
  checkSuccess: (value: number)  => string;
}

const BaselineData: React.FC<BaselineDataProps> = ({ state, checkSuccess }) => {
  const totalPoints =
    +JSON.stringify(state.context.pointsWonOnServe) +
    +JSON.stringify(state.context.pointsLostOnServe) +
    +JSON.stringify(state.context.pointsWonOnReturn) +
    +JSON.stringify(state.context.pointsLostOnReturn);

  const totalBaselinePointsWon = +(
    +JSON.stringify(state.context.pointsWonByForehand) +
    +JSON.stringify(state.context.pointsWonByBackhand) +
    +JSON.stringify(state.context.pointsWonByForehandWinner) +
    +JSON.stringify(state.context.pointsWonByBackhandWinner)
  );

  const totalBaselinePointsLost = +(
    +JSON.stringify(state.context.pointsLostByForehand) +
    +JSON.stringify(state.context.pointsLostByBackhand) +
    +JSON.stringify(state.context.pointsLostByForehandUnforcedError) +
    +JSON.stringify(state.context.pointsLostByBackhandUnforcedError)
  );

  const percentPointsWonOnBaseline = +(totalBaselinePointsWon/totalPoints * 100).toPrecision(2);

  const percentBaselinePointsWon = +(totalBaselinePointsWon/(totalBaselinePointsWon + totalBaselinePointsLost) * 100).toPrecision(2);

  const percentPointsWonByWinners = +(  (  +JSON.stringify(state.context.pointsWonByForehandWinner) +
      +JSON.stringify(state.context.pointsWonByBackhandWinner))/(totalBaselinePointsWon) * 100).toPrecision(2);

  const percentPointsLostByUnforcedError = +(  (  +JSON.stringify(state.context.pointsLostByForehandUnforcedError) +
      +JSON.stringify(state.context.pointsLostByBackhandUnforcedError))/(totalBaselinePointsLost) * 100).toPrecision(2);

  const totalForehands =
    +JSON.stringify(state.context.pointsWonByForehand) +
    +JSON.stringify(
      state.context.pointsLostByForehand +
        +JSON.stringify(state.context.pointsWonByForehandWinner) +
        +JSON.stringify(state.context.pointsLostByForehandUnforcedError)
    );

  const totalWinningForehands =
    +JSON.stringify(state.context.pointsWonByForehand) +
    +JSON.stringify(state.context.pointsWonByForehandWinner);

  const forehandAccuracy = +(
    (totalWinningForehands / totalForehands) *
    100
  ).toPrecision(2);

  const totalBackhands =
    +JSON.stringify(state.context.pointsWonByBackhand) +
    +JSON.stringify(state.context.pointsLostByBackhand) +
    +JSON.stringify(state.context.pointsLostByBackhandUnforcedError) +
    +JSON.stringify(state.context.pointsWonByBackhandWinner);

  const totalWinningBackhands =
    +JSON.stringify(state.context.pointsWonByBackhand) +
    +JSON.stringify(state.context.pointsWonByBackhandWinner);

  const backhandAccuracy = +(
    (totalWinningBackhands / totalBackhands) *
    100
  ).toPrecision(2);

  const winningShotType = {
    labels: ["Forehand", "Forehand Winner", "Backhand", "Backhand Winner"],
    datasets: [
      {
        label: "Winning Shot Type",
        data: [ +JSON.stringify(state.context.pointsWonByForehand), +JSON.stringify(state.context.pointsWonByForehandWinner), +JSON.stringify(state.context.pointsWonByBackhand), +JSON.stringify(state.context.pointsWonByBackhandWinner)],
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
        data: [ +JSON.stringify(state.context.pointsLostByForehand), +JSON.stringify(state.context.pointsLostByForehandUnforcedError), +JSON.stringify(state.context.pointsLostByBackhand), +JSON.stringify(state.context.pointsLostByBackhandUnforcedError)],
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
      <div className={styles.heading}>Baseline Statistics</div>
      <div className={styles.body}>
        <div className={styles.firstRow}>
          <div className={styles.percentagesCol}>
            <div className={styles.baselineMeterHeading}>Total Points Won On Baseline</div>
            <div className={styles.meter}>
              <Grommet>
                <Meter
                    value={percentPointsWonOnBaseline}
                    type="circle"
                    margin="small"
                    size="small"
                    thickness="medium"
                    background="#B2B2B2"
                    color={checkSuccess(percentPointsWonOnBaseline)}
                />
              </Grommet>
              <div className={styles.baselinePercent}>{percentPointsWonOnBaseline}%</div>
            </div>
          </div>
          <div className={styles.percentagesCol}>
            <div className={styles.baselineMeterHeading}>Baseline Points Won</div>
            <div className={styles.meter}>
              <Grommet>
                <Meter
                    value={percentBaselinePointsWon}
                    type="circle"
                    margin="small"
                    size="small"
                    thickness="medium"
                    background="#B2B2B2"
                    color={checkSuccess(percentBaselinePointsWon)}
                />
              </Grommet>
              <div className={styles.baselinePercent}>{percentBaselinePointsWon}%</div>
            </div>
          </div>
          <div className={styles.percentagesCol}>
            <div className={styles.baselineMeterHeading}>Points Won By Winners</div>
            <div className={styles.meter}>
              <Grommet>
                <Meter
                    value={percentPointsWonByWinners}
                    type="circle"
                    margin="small"
                    size="small"
                    thickness="medium"
                    color={checkPointsWonByWinner(percentPointsWonByWinners)}
                    background="#B2B2B2"
                />
              </Grommet>
              <div className={styles.baselinePercent}>{percentPointsWonByWinners}%</div>
            </div>
          </div>
          <div className={styles.baselineMeterLastCol}>
            <div className={styles.baselineMeterHeading}>Points Lost by Unforced Error</div>
            <div className={styles.meter}>
              <Grommet>
                <Meter
                    value={percentPointsLostByUnforcedError}
                    type="circle"
                    margin="small"
                    size="small"
                    thickness="medium"
                    color={checkPointsByUnforcedErrors(percentPointsLostByUnforcedError)}
                    background="#B2B2B2"

                />
              </Grommet>
              <div className={styles.baselinePercent}>{percentPointsLostByUnforcedError}%</div>
            </div>
          </div>
        </div>
        <div className={styles.rowHeading}>Baseline Shot Break Down</div>
        <div className={styles.border}></div>
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
            <div className={styles.accuracyMeterHeading}>Forehand Accuracy: {forehandAccuracy}%</div>
            <div className={styles.meterCol}>
              <div className={styles.meter}>
            <Grommet>
                <Meter
                  value={forehandAccuracy}
                  type="circle"
                  margin="small"
                  size="small"
                  thickness="medium"
                  background="#B2B2B2"
                  color={checkSuccess(forehandAccuracy)}
                />
            </Grommet>
              </div>
            </div>
            </div>
            <div className={styles.accuracyCol}>
            <div className={styles.accuracyMeterHeading}>Backhand Accuracy: {backhandAccuracy}%</div>
            <div className={styles.meterCol}>
            <div className={styles.meter}>
              <Grommet>
                <Meter
                  value={backhandAccuracy}
                  type="circle"
                  margin="small"
                  size="small"
                  thickness="medium"
                  background="#B2B2B2"
                  color={checkSuccess(backhandAccuracy)}
                />
              </Grommet>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaselineData;
