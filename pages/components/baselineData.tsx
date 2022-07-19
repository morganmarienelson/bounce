import styles from "./css/baselineDataPanel.module.css";
import React from "react";
import { VictoryPie } from "victory-pie";
import {
  Grommet,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "grommet/components";
import { Meter } from "grommet";

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

  const losingShotType = [
    { x: "Forehand", y: percentLostByForehand },
    { x: "Backhand", y: percentLostByBackhand },
    { x: "Forehand Unforced Error", y: percentLostByForehandWinner },
    { x: "Backhand Unforced Error", y: percentLostByBackhandWinner },
  ];

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
    width: 200,
    animationEnabled: true,
    title: {
      text: "Winning Shot Break Down",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [
          { label: "Forehand", y: percentWonByForehand },
          { label: "Backhand", y: percentWonByBackhand },
          { label: "Forehand Winner", y: percentWonByForehandWinner },
          { label: "Backhand Winner", y: percentWonByBackhandWinner },
        ],
      },
    ],
  };

  return (
    <div>
      <div className={styles.heading}>Baseline Statistics</div>
      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.pieChart}></div>
          <div className={styles.pieChart}></div>
          <div className={styles.accuracy}>
            <div className={styles.meterHeader}>Forehand Accuracy</div>
            <Grommet>
              <div className={styles.meter}>
                <Meter
                  value={forehandAccuracy}
                  type="circle"
                  margin="small"
                  size="small"
                  thickness="medium"
                  background="#B2B2B2"
                  color={checkSuccess(forehandAccuracy)}
                />
              </div>
            </Grommet>
            <div className={styles.meterHeader}>Backhand Accuracy</div>
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
  );
};

export default BaselineData;
