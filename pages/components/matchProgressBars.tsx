import { Progress } from "antd";

const MatchProgressBars = () => {
  const checkSuccess = (value: number) => {
    if (value >= 50) {
      return "green";
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
      <div style={{ padding: 10, paddingLeft: 15 }}>
        <h3>Total Points Won</h3>
        <Progress
          percent={testMatchPercents.percentPointsWon}
          strokeColor={checkSuccess(testMatchPercents.percentPointsWon)}
          strokeWidth={12}
        />
        <h3>Point Won By Winners</h3>
        <Progress
          percent={testMatchPercents.percentWonByWinners}
          strokeWidth={12}
          strokeColor={"green"}
        />
        <h3>Points Lost by Unforced Errors</h3>
        <Progress
          percent={testMatchPercents.percentLostByUnforced}
          strokeColor={checkError(testMatchPercents.percentLostByUnforced)}
          strokeWidth={12}
        />
        <h3>Points Won on Serve</h3>
        <Progress
          percent={testMatchPercents.percentWonServe}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.percentWonServe)}
        />
        <h3>First Serve Percentage</h3>
        <Progress
          percent={testMatchPercents.firstServePercent}
          strokeColor={checkSuccess(testMatchPercents.firstServePercent)}
          strokeWidth={12}
        />
        <h3>Second Serve Percentage</h3>
        <Progress
          percent={testMatchPercents.secondServePercent}
          strokeWidth={12}
          strokeColor={checkSecondServe(testMatchPercents.secondServePercent)}
        />
        <h3>Points Lost on Return</h3>
        <Progress
          percent={testMatchPercents.pointsLostOnReturn}
          strokeWidth={12}
          strokeColor={checkError(testMatchPercents.pointsLostOnReturn)}
        />
        <h3>Percentage of Missed Returns</h3>
        <Progress
          percent={testMatchPercents.percentMissedReturns}
          strokeWidth={12}
          strokeColor={checkError(testMatchPercents.percentMissedReturns)}
        />
        <h3>Points Won at Baseline</h3>
        <Progress
          percent={testMatchPercents.pointsWonBaseline}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonBaseline)}
        />
        <h3>Points Won with Forehand</h3>
        <Progress
          percent={testMatchPercents.pointsWonWithForehand}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonWithForehand)}
        />
        <h3>Points Won with Backhand</h3>
        <Progress
          percent={testMatchPercents.pointsWonWithBackhand}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonWithBackhand)}
        />
        <h3>Points Won at Net</h3>
        <Progress
          percent={testMatchPercents.pointsWonAtNet}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonAtNet)}
        />
        <h3>Points Won with Forehand Volley</h3>
        <Progress
          percent={testMatchPercents.pointsWonForehandVolley}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonForehandVolley)}
        />
        <h3>Points Won with Backhand Volley</h3>
        <Progress
          percent={testMatchPercents.pointsWonBackhandVolley}
          strokeWidth={12}
          strokeColor={checkSuccess(testMatchPercents.pointsWonBackhandVolley)}
        />
        <h3>Points Won with Overhead</h3>
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
