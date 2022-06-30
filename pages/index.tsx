import MatchStats from "./matchStats";
import PointDashboard from "./pointDashboard";
import {useState} from "react";

const PointInput = () => {
    const [showDashboard, setShowDashboard] = useState(true);

    return (
        <>
            {showDashboard ? (
                <PointDashboard setShowDashboard={setShowDashboard}/>

            ) : (
                <MatchStats/>
            )}


        </>
    );
};

export default PointInput;
