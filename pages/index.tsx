import MatchStats from "./matchStats";
import PointDashboard from "./pointDashboard";
import { useState } from "react";
import { useMachine } from "@xstate/react";
import { totalPointsWon } from "../machines/totalPointsWon";

function PointInput() {
  const [showDashboard, setShowDashboard] = useState(true);
  const [state, send] = useMachine(totalPointsWon);

  return (
    <>
      {showDashboard ? (
        <>
          <PointDashboard setShowDashboard={setShowDashboard} send={send} />
          Total Winners:
          {JSON.stringify(state.context.pointsWonByWinner)}
          Total Points Won:
          {JSON.stringify(state.context.totalPointsWon)}
          Forehand: {JSON.stringify(state.context.pointsWonByForehand)}
          Backhand: {JSON.stringify(state.context.pointsWonByBackhand)}
          BackhandVolley:{" "}
          {JSON.stringify(state.context.pointsWonByBackhandVolley)}
          Forehand Volley:{" "}
          {JSON.stringify(state.context.pointsWonByForehandVolley)}
          Overhead: {JSON.stringify(state.context.pointsWonByOverhead)}
        </>
      ) : (
        <MatchStats setShowDashboard={setShowDashboard} />
      )}
    </>
  );
}

export default PointInput;
