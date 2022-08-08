import {useEffect, useState} from "react";
import {getSession, signIn} from "next-auth/react";
import styles from "../../css/matchLog.module.css"
import {useRouter} from "next/router";
import BackToHomeHeading from "../../components/statisticsComponents/backToHomeHeading";
import Matches from "../../components/matches";

function StatisticsPage(){
    const [loading, setLoading] = useState(true)
    const [matches, setMatches] = useState([])

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

    return(
        <>
        <BackToHomeHeading/>
        <div>
            {matches.map((match) => {
                return (
                        <div key={match.id} className={styles.matchLog}>
                            <Matches match={match} fetchMatches={fetchMatches}/>
                        </div>
                )
            })}
        </div>
        </>
    )
}

export default StatisticsPage;

