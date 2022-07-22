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
                    <div>
                        { +JSON.stringify(state.context.pointsWonOnServe)}
                    </div>

                </>
            ) : (
                <MatchStats setShowDashboard={setShowDashboard} state={state}/>
            )}
        </>
    );
}

export default PointInput;
