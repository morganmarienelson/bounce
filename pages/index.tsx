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
                    Missed First: {JSON.stringify(state.context.missedFirstServes)}
                    Doubles: {JSON.stringify(state.context.doubleFaults)}
                    L serve: {JSON.stringify(state.context.pointsLostOnServe)}
                </>
            ) : (
                <MatchStats setShowDashboard={setShowDashboard}/>
            )}
        </>
    );
}

export default PointInput;
