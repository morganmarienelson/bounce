import styles from "./css/baselineDataPanel.module.css";
import React, { Component } from 'react';
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
import { Doughnut } from "react-chartjs-2";
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
}

const BaselineData: React.FC<BaselineDataProps> = ({ state }) => {
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

  const percentWonByForehand = +(
    (+JSON.stringify(state.context.pointsWonByForehand) /
      totalBaselinePointsWon) *
    100
  ).toPrecision(2);
  const percentWonByBackhand = +(
    (+JSON.stringify(state.context.pointsWonByBackhand) /
      totalBaselinePointsWon) *
    100
  ).toPrecision(2);
  const percentWonByForehandWinner = +(
    (+JSON.stringify(state.context.pointsWonByForehandWinner) /
      totalBaselinePointsWon) *
    100
  ).toPrecision(2);
  const percentWonByBackhandWinner = +(
    (+JSON.stringify(state.context.pointsWonByBackhandWinner) /
      totalBaselinePointsWon) *
    100
  ).toPrecision(2);

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

  const percentLostByForehand = +(
    (+JSON.stringify(state.context.pointsLostByForehand) /
      totalBaselinePointsLost) *
    100
  ).toPrecision(2);
  const percentLostByBackhand = +(
    (+JSON.stringify(state.context.pointsLostByBackhand) /
      totalBaselinePointsLost) *
    100
  ).toPrecision(2);
  const percentLostByForehandWinner = +(
    (+JSON.stringify(state.context.pointsLostByForehandUnforcedError) /
      totalBaselinePointsLost) *
    100
  ).toPrecision(2);
  const percentLostByBackhandWinner = +(
    (+JSON.stringify(state.context.pointsLostByBackhandUnforcedError) /
      totalBaselinePointsLost) *
    100
  ).toPrecision(2);

  const checkSuccess = (value: number) => {
    if (value >= 75) {
      return "#69E53B";
    } else if (value > 50) {
      return " #EEFB46";
    } else {
      return "red";
    }
  };

  const winningShotType = {
    backgroundColor: [
      "rgd(2, 88, 355)",
      "blue",
      "green",
      "purple",
    ],
    labels: ["Forehand", "Forehand Winner", "Backhand", "Backhand Winner"],
    datasets: [
      {
        label: "Winning Shot Type",
        data: [ +JSON.stringify(state.context.pointsWonByForehand), +JSON.stringify(state.context.pointsWonByForehandWinner), +JSON.stringify(state.context.pointsWonByBackhand), +JSON.stringify(state.context.pointsWonByBackhandWinner)],
        backgroundColor: [
          "#ccff00",
          "#0033ff",
          "#00ff99",
          "#00ffff",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const losingShotType = {
    backgroundColor: [
      "rgd(2, 88, 355)",
      "blue",
      "green",
      "purple",
    ],
    labels: ["Missed Forehand", "Forehand Unforced Error", "Missed Backhand", "Backhand Unforced Error"],
    datasets: [
      {
        label: "Losing Shot Type",
        data: [ +JSON.stringify(state.context.pointsLostByForehand), +JSON.stringify(state.context.pointsLostByForehandUnforcedError), +JSON.stringify(state.context.pointsLostByBackhand), +JSON.stringify(state.context.pointsLostByBackhandUnforcedError)],
        backgroundColor: [
          "#ff1111",
          "#fffc0b",
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
      <div className={styles.heading}>Baseline Statistics</div>
      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.doughnutChartCol}>
            <div className={styles.meterHeader}>Winning Shot Types</div>
            <div className={styles.doughnutChart}>
          <Doughnut data={winningShotType} options={options} />
            </div>
          </div>
          <div className={styles.doughnutChartCol}>
            <div className={styles.meterHeader}>Losing Shot Types</div>
            <div className={styles.doughnutChart}>
              <Doughnut data={losingShotType} options={options} />
            </div>
          </div>
          <div className={styles.accuracy}>
            <div className={styles.meterHeader}>Forehand Accuracy: {forehandAccuracy}%</div>
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
            <div className={styles.meterHeader}>Backhand Accuracy: {backhandAccuracy}%</div>
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
  );
};

export default BaselineData;
