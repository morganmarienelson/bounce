import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import PrevMatchStatsDisplay from "../../../components/statisticsComponents/prevStatsComponents/prevMatchStatsDisplay";

function MatchDetails(){
    const router = useRouter();
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const matchId = router.query.matchId
            const response = await fetch(`/api/matches/${matchId}`, {
                method: 'GET'
            })
            const data = await response.json()
            setStats(data);
            console.log(data);
        }
        fetchData();
    }, [])

    return(
        <div>
            <PrevMatchStatsDisplay stats={stats}/>
        </div>

    )
}

export default MatchDetails