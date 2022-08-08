import styles from "../css/matchLog.module.css";
import {Nav} from "grommet";
import {Modal} from "antd";
import {useState} from "react";
import {useRouter} from "next/router";
import PrevMatchDetailsModal from "./statisticsComponents/prevStatsComponents/prevMatchDetailsModal";
import {MatchDetails} from "../types/interfaces";

function MatchLogTable(match: any, fetchMatches: any){
    const router = useRouter();
    const [matchDetails, setMatchDetails] = useState(
            {
                playerName: "",
                opponentName: "",
                courtType: "",
                location: "",
                setting:"",
                matchType: "",
                notes:"",
                percentPointsWonOnBaseline: 0,
                percentBaselinePointsWon: 0,
                percentPointsWonByWinnersOnBaseline: 0,
                percentPointsLostByUnforcedErrorOnBaseline: 0,
                pointsWonByForehandOnBaseline:0,
                pointsWonByForehandWinnerOnBaseline: 0,
                pointsWonByBackhandOnBaseline: 0,
                pointsWonByBackhandWinnerOnBaseline: 0,
                pointsLostByForehandOnBaseline: 0,
                pointsLostByForehandUnforcedErrorOnBaseline: 0,
                pointsLostByBackhandOnBaseline: 0,
                pointsLostByBackhandUnforcedErrorOnBaseline: 0,
                forehandAccuracyOnBaseline: 0,
                backhandAccuracyOnBaseline: 0,
                percentPointsWonAtNet: 0,
                percentNetPointsWon: 0,
                percentPointsWonByWinnersAtNet: 0,
                percentPointsLostByUnforcedErrorAtNet: 0,
                forehandVolleyAccuracy: 0,
                backhandVolleyAccuracy: 0,
                overheadAccuracy: 0,
                pointsWonByForehandVolley: 0,
                pointsWonByForehandVolleyWinner: 0,
                pointsWonByBackhandVolley: 0,
                pointsWonByBackhandVolleyWinner: 0,
                pointsWonByOverhead: 0,
                pointsWonByOverheadWinner: 0,
                pointsLostByForehandVolley: 0,
                pointsLostByForehandVolleyUnforcedError: 0,
                pointsLostByBackhandVolley: 0,
                pointsLostByBackhandVolleyUnforcedError: 0,
                pointsLostByOverhead:0,
                pointsLostByOverheadUnforcedError: 0,
                percentOfTotalPointsWonOnServe: 0,
                percentOfServingPointsWon: 0,
                firstServePercentage: 0,
                secondServePercentage: 0,
                totalAces: 0,
                notReturnedServesDeuceSide: 0,
                notReturnedServesAdSide: 0,
                totalNotReturnedFirstServes: 0,
                totalNotReturnedSecondServes: 0,
                totalNotReturnedServes: 0,
                notReturnedServesToAlley: 0,
                notReturnedServesToBody: 0,
                notReturnedServesToCenter: 0,
                percentOfTotalPointsWonOnReturn: 0,
                percentOfReturnPointsWon: 0,
                missedSecondServeReturns: 0,
                missedFirstServeReturns: 0,
            }
        );
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showMatchHandler = (id : number) => {
       router.push('/matches/' + id)
    }

    const showMatchDetails = async (match: any) =>{
        setMatchDetails(match);
        setIsModalVisible(true);
    }

    const deleteMatch = (id: number) => {
        Modal.confirm({
            title: "Are you sure that you want to delete this match?" ,
            okType: "danger",
            onOk: async () => {
                const response = await fetch(`/api/match/${id}`, {
                    method: 'DELETE'
                })
                const data = await response.json()
                fetchMatches();
            },
        });
    }
    return (
        <>
        <div className={styles.names}>
            {match.playerName} vs {match.opponentName}
        </div>
    <div className={styles.names}>
        <Nav direction="row">
            <a onClick={() => showMatchDetails(match)}>View Details</a>
            <a onClick={() => showMatchHandler(match.id)}>View Stats</a>
            <a onClick={() => deleteMatch(match.id)}>Delete</a>
        </Nav>

    </div>
            <PrevMatchDetailsModal matchDetails={matchDetails} prevMatchDetailsModalVisible={isModalVisible} setPrevMatchDetailsModalVisible={setIsModalVisible}/>
        </>
    )

}

export default MatchLogTable;