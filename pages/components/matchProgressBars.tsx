import { Progress } from "antd";
import styles from "./css/matchStats.module.css";

const MatchProgressBars = () => {
  const checkSuccess = (value: number) => {
    if (value >= 75) {
      return "#69E53B";
    } else if (value > 50) {
      return " #EEFB46";
    } else {
      return "red";
    }
  };

  const checkError = (value: number) => {
    if (value >= 50) {
      return "purple";
    } else {
      return "green";
    }
  };

  const checkSecondServe = (value: number) => {
    if (value >= 70) {
      return "green";
    } else {
      return "red";
    }
  };

  const testMatchPercents = {
    percentPointsWon: 20,
    percentWonByWinners: 30,
    percentLostByUnforced: 40,
    percentWonServe: 50,
    firstServePercent: 30,
    secondServePercent: 70,
    pointsLostOnReturn: 40,
    percentMissedReturns: 30,
    pointsWonBaseline: 80,
    pointsWonWithForehand: 34,
    pointsWonWithBackhand: 65,
    pointsWonAtNet: 40,
    pointsWonForehandVolley: 60,
    pointsWonBackhandVolley: 30,
    pointsWonOverhead: 30,
  };

  return (
    <>
      <div>
        <div className={styles.heading}>Total Points Won</div>
        <Progress
          percent={testMatchPercents.percentPointsWon}
          strokeColor={checkSuccess(testMatchPercents.percentPointsWon)}
          strokeWidth={12}
        />
        <div className={styles.heading}>Point Won By Winners</div>
        <Progress
          percent={testMatchPercents.percentWonByWinners}
          strokeWidth={12}
          strokeColor={"green"}
        />
        <div className={styles.heading}>Points Lost by Unforced Errors</div>
        <Progress
          percent={testMatchPercents.percentLostByUnforced}
          strokeColor={checkError(testMatchPercents.percentLostByUnforced)}
          strokeWidth={12}
        />
        <div className={styles.heading}>Points Won on Serve</div>
        <Progress
          percent={testMatchPercents.percentWonServe}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.percentWonServe)}
        />
        <div className={styles.heading}>First Serve Percentage</div>
        <Progress
          percent={testMatchPercents.firstServePercent}
          strokeColor={checkSuccess(testMatchPercents.firstServePercent)}
          strokeWidth={12}
        />
        <div className={styles.heading}>Second Serve Percentage</div>
        <Progress
          percent={testMatchPercents.secondServePercent}
          strokeWidth={12}
          strokeColor={checkSecondServe(testMatchPercents.secondServePercent)}
        />
        <div className={styles.heading}>Points Lost on Return</div>
        <Progress
          percent={testMatchPercents.pointsLostOnReturn}
          strokeWidth={12}
          strokeColor={checkError(testMatchPercents.pointsLostOnReturn)}
        />
        <div className={styles.heading}>Percentage of Missed Returns</div>
        <Progress
          percent={testMatchPercents.percentMissedReturns}
          strokeWidth={12}
          strokeColor={checkError(testMatchPercents.percentMissedReturns)}
        />
        <div className={styles.heading}>Points Won at Baseline</div>
        <Progress
          percent={testMatchPercents.pointsWonBaseline}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonBaseline)}
        />
        <div className={styles.heading}>Points Won with Forehand</div>
        <Progress
          percent={testMatchPercents.pointsWonWithForehand}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonWithForehand)}
        />
        <div className={styles.heading}>Points Won with Backhand</div>
        <Progress
          percent={testMatchPercents.pointsWonWithBackhand}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonWithBackhand)}
        />
        <div className={styles.heading}>Points Won at Net</div>
        <Progress
          percent={testMatchPercents.pointsWonAtNet}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonAtNet)}
        />
        <div className={styles.heading}>Points Won with Forehand Volley</div>
        <Progress
          percent={testMatchPercents.pointsWonForehandVolley}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonForehandVolley)}
        />
        <div className={styles.heading}>Points Won with Backhand Volley</div>
        <Progress
          percent={testMatchPercents.pointsWonBackhandVolley}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonBackhandVolley)}
        />
        <div className={styles.heading}>Points Won with Overhead</div>
        <Progress
          percent={testMatchPercents.pointsWonOverhead}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonOverhead)}
        />
      </div>
    </>
  );
};

export default MatchProgressBars;
