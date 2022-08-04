import {useEffect, useState} from "react";
import {getSession, signIn} from "next-auth/react";
import styles from "../../css/matchLog.module.css"
import {useRouter} from "next/router";
import BackToHomeHeading from "../../components/statisticsComponents/backToHomeHeading";
import {Nav} from "grommet";
import PrevMatchDetailsModal from "../../components/statisticsComponents/prevStatsComponents/prevMatchDetailsModal";
import {Modal} from "antd";

function StatisticsPage(props){
    const [loading, setLoading] = useState(true)
    const [matches, setMatches] = useState([])
    const router = useRouter();
    const [matchDetails, setMatchDetails] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    const fetchMatches = async () => {
        const response = await fetch('api/matches')
        const data = await response.json();
        setMatches(data)
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

    const showMatchHandler = (id ) => {
        router.push('/matchLog/' + id)
    }

    const showMatchDetails = async (match) =>{
        setMatchDetails(match);
        setIsModalVisible(true);
    }

    const deleteMatch = (id) => {
        Modal.confirm({
            title: "Are you sure that you want to delete this match?" ,
            okType: "danger",
            onOk: async () => {
                const response = await fetch(`/api/matches/${id}`, {
                    method: 'DELETE'
                })
                const data = await response.json()
                fetchMatches();
            },
        });
    }

    return(
        <>
        <BackToHomeHeading/>
        <div>
            {matches.map((match) => {
                return (
                        <div key={match.id} className={styles.matchLog}>
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
                        </div>
                )
            })}
        </div>
            <PrevMatchDetailsModal matchDetails={matchDetails} prevMatchDetailsModalVisible={isModalVisible} setPrevMatchDetailsModalVisible={setIsModalVisible}/>
        </>
    )
}

export default StatisticsPage;