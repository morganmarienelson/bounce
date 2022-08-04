import React from "react";

interface PrevMatchDetailsProps {
    matchDetails: any;
}

const PrevMatchDetails: React.FC<PrevMatchDetailsProps> = ({matchDetails}) => {

    return (
        <div>{matchDetails.playerName}</div>
    )
}

export default PrevMatchDetails;
