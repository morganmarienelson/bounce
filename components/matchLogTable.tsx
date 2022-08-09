import styles from "../css/matchLog.module.css";
import {Nav} from "grommet";
import {Modal} from "antd";
import {useState} from "react";
import {useRouter} from "next/router";
import PrevMatchDetailsModal from "./statisticsComponents/prevStatsComponents/prevMatchDetailsModal";
import {MatchDetails} from "../types/matchDetails";
import {MatchDetailsInit} from "../enums/matchDetailsInit";

function MatchLogTable(match: any, fetchMatches: any){
    const router = useRouter();
    const [matchDetails, setMatchDetails] = useState(
            MatchDetailsInit
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