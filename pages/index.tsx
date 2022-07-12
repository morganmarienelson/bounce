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
                    Ace First: {JSON.stringify(state.context.acesOnFirstServe)}
                    Ace Second: {JSON.stringify(state.context.acesOnSecondServe)}
                    W serve: {JSON.stringify(state.context.pointsWonOnServe)}
                </>
            ) : (
                <MatchStats setShowDashboard={setShowDashboard}/>
            )}
        </>
    );
}

export default PointInput;
