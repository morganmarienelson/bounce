import {useState} from "react";
import {useMachine} from "@xstate/react";
import {matchData} from "../machines/matchData";
import PointDashboard from "../components/dashboardComponents/pointDashboard";
import NewMatchStatsDisplay from "../components/statisticsComponents/newStatsComponents/newMatchStatsDisplay";


function Dashboard() {
    const [showDashboard, setShowDashboard] = useState(true);
    const [state, send] = useMachine(matchData);

    return (
        <>
            {showDashboard ? (
                <>
                    <PointDashboard setShowDashboard={setShowDashboard} send={send}/>
                </>
            ) : (
                <NewMatchStatsDisplay setShowDashboard={setShowDashboard} state={state}/>
            )}
        </>
    );
}

export default Dashboard;