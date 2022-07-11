import MatchStats from "./matchStats";
import PointDashboard from "./pointDashboard";
import {useState} from "react";
import {useMachine} from "@xstate/react";
import {matchData} from "../machines/matchData";

function PointInput() {
    const [showDashboard, setShowDashboard] = useState(true);
    const [state, send] = useMachine(matchData);

    return (
        <>
            {showDashboard ? (
                <>
                    <PointDashboard setShowDashboard={setShowDashboard} send={send}/>
                    Forehand: {JSON.stringify(state.context.pointsWonByForehand)}
                    Backhand: {JSON.stringify(state.context.pointsWonByBackhand)}
                    BackhandVolley:{" "}
                    {JSON.stringify(state.context.pointsWonByBackhandVolley)}
                    Forehand Volley:{" "}
                    {JSON.stringify(state.context.pointsWonByForehandVolley)}
                    Overhead: {JSON.stringify(state.context.pointsWonByOverhead)}
                    ForehandW: {JSON.stringify(state.context.pointsWonByForehandWinner)}
                    BackhandW: {JSON.stringify(state.context.pointsWonByBackhandWinner)}
                    BackhandVolleyW:{" "}
                    {JSON.stringify(state.context.pointsWonByBackhandVolleyWinner)}
                    Forehand VolleyW:{" "}
                    {JSON.stringify(state.context.pointsWonByForehandVolleyWinner)}
                    OverheadW: {JSON.stringify(state.context.pointsWonByOverheadWinner)}
                </>
            ) : (
                <MatchStats setShowDashboard={setShowDashboard}/>
            )}
        </>
    );
}

export default PointInput;
