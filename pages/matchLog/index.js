import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getSession, signIn} from "next-auth/react";

function StatisticsPage(props){
    const router = useRouter();
    const [loading, setLoading] = useState(true)
    const [matches, setMatches] = useState([])

    useEffect(() => {
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
        securePage();
        fetchMatches();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }
    function showMatchHandler(){
        router.push('/' + props.id);
    }




    return(
        <div>
            {matches.map((match) => {
                return (
                    <div key={match.id}>
                        {match.id}
                    </div>
                )
            })}
        </div>

    )
}

export default StatisticsPage;