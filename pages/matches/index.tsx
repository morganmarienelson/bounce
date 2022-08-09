import {useEffect, useState} from "react";
import {getSession, signIn} from "next-auth/react";
import styles from "../../css/matchLog.module.css"
import BackToHomeHeading from "../../components/statisticsComponents/backToHomeHeading";
import {Nav} from "grommet";
import PrevMatchDetailsModal from "../../components/statisticsComponents/prevStatsComponents/prevMatchDetailsModal";
import {useRouter} from "next/router";
import {MatchDetailsInit} from "../../enums/matchDetailsInit";
import {Modal} from "antd";
import {MatchDetails} from "../../types/matchDetails";

function StatisticsPage(){
    const [loading, setLoading] = useState(true)
    const [matches, setMatches] = useState([])
    const router = useRouter();
    const [matchDetails, setMatchDetails] = useState(MatchDetailsInit);
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showMatchHandler = (id : number) => {
        router.push('/matches/' + id)
    }

    const showMatchDetails = async (match: MatchDetails) =>{
        setMatchDetails(match);
        console.log(match);
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

    const fetchMatches = async () => {
        const response = await fetch(`/api/match`, {
            method: 'GET'
        })
        const data = await response.json();
        setMatches(data);
    }
    const securePage = async () => {
        const session = await getSession();
        if (!session) {
            signIn()
        } else {
            setLoading(false);
        }
    }

    useEffect(() => {
        securePage();
        fetchMatches();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

    return(
        <>
        <BackToHomeHeading/>
        <div>
            {matches.map((match: any) => {
                return (
                        <div key={match.id} className={styles.matchLog}>
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
                        </div>
                )
            })}
        </div>
        </>
    )
}

export default StatisticsPage;

