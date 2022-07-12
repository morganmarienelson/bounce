import { Progress } from "antd";
import styles from "./css/matchStats.module.css";

interface MatchProgressBarProps {
  state: any;
}

const MatchProgressBars: React.FC<MatchProgressBarProps> = ({ state }) => {
  const totalPointsWon =
    +JSON.stringify(state.context.pointsWonOnServe) +
    +JSON.stringify(state.context.pointsWonOnReturn);

  const totalPointsLost =
    +JSON.stringify(state.context.pointsLostOnServe) +
    +JSON.stringify(state.context.pointsLostOnReturn);

  const totalServePoints =
    +JSON.stringify(state.context.pointsWonOnServe) +
    +JSON.stringify(state.context.pointsLostOnServe);

  const totalReturnPoints =
    +JSON.stringify(state.context.pointsWonOnReturn) +
    +JSON.stringify(state.context.pointsLostOnReturn);

  const totalPointsPlayed = totalPointsLost + totalPointsWon;

  const percentPointsWon = (totalPointsWon / totalPointsPlayed) * 100;

  const pointsWonByWinner =
    +JSON.stringify(state.context.pointsWonByForehandWinner) +
    +JSON.stringify(state.context.pointsWonByBackhandWinner) +
    +JSON.stringify(state.context.pointsWonByForehandVolleyWinner) +
    +JSON.stringify(state.context.pointsWonByBackhandVolleyWinner) +
    +JSON.stringify(state.context.pointsWonByOverheadWinner);

  const percentPointsWonByWinners = (pointsWonByWinner / totalPointsWon) * 100;

  const pointsLostByUnforcedErrors =
    +JSON.stringify(state.context.pointsLostByForehandUnforcedError) +
    +JSON.stringify(state.context.pointsLostByBackhandUnforcedError) +
    +JSON.stringify(state.context.pointsLostByForehandVolleyUnforcedError) +
    +JSON.stringify(state.context.pointsLostByBackhandVolleyUnforcedError) +
    +JSON.stringify(state.context.pointsLostByOverheadUnforcedError);

  const percentLostByUnforced =
    (pointsLostByUnforcedErrors / totalPointsLost) * 100;

  const percentWonOnServe =
    (+JSON.stringify(state.context.pointsWonOnServe) / totalPointsPlayed) * 100;

  const percentWonOnReturn =
    (+JSON.stringify(state.context.pointsWonOnReturn) / totalPointsPlayed) *
    100;

  const percentMissedReturns =
    +JSON.stringify(state.context.missedReturns) / totalReturnPoints;

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

  return (
    <>
      <div>
        <div className={styles.heading}>Total Points Won</div>
        <Progress
          percent={percentPointsWon}
          strokeColor={checkSuccess(percentPointsWon)}
          strokeWidth={12}
          trailColor={"#DEDEDE"}
        />
        <div className={styles.heading}>Point Won By Winners</div>
        <Progress
          percent={percentPointsWonByWinners}
          strokeWidth={12}
          strokeColor={"green"}
          trailColor={"#DEDEDE"}
        />
        <div className={styles.heading}>Points Lost by Unforced Errors</div>
        <Progress
          percent={percentLostByUnforced}
          strokeColor={checkError(percentLostByUnforced)}
          strokeWidth={12}
          trailColor={"#DEDEDE"}
        />
        <div className={styles.heading}>Points Won on Serve</div>
        <Progress
          percent={percentWonOnServe}
          strokeWidth={12}
          strokeColor={checkSuccess(percentWonOnServe)}
          trailColor={"#DEDEDE"}
        />
        <div className={styles.heading}>Points Won on Return</div>
        <Progress
          percent={percentWonOnReturn}
          strokeWidth={12}
          strokeColor={checkError(percentWonOnReturn)}
          trailColor={"#DEDEDE"}
        />
        <div className={styles.heading}>Percentage of Missed Returns</div>
        <Progress
          percent={percentMissedReturns}
          strokeWidth={12}
          strokeColor={checkError(percentMissedReturns)}
          trailColor={"#DEDEDE"}
        />
      </div>
    </>
  );
};

export default MatchProgressBars;
