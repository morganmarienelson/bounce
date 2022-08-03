import {useRouter} from "next/router";

function MatchDetails(){
    const router = useRouter();
    const matchId = router.query.matchId
    return(
        <div>
            This is the previous match stats {matchId}
        </div>

    )
}

export default MatchDetails;