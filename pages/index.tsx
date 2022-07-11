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
          {JSON.stringify(state.context.pointsWonByWinner)}
          {JSON.stringify(state.context.totalPointsWon)}
        </>
      ) : (
        <MatchStats setShowDashboard={setShowDashboard} />
      )}
    </>
  );
}

export default PointInput;
