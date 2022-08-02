import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getSession, signIn} from "next-auth/react";

function StatisticsPage(props){
    const router = useRouter();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession();
            if (!session) {
                signIn()
            } else {
                setLoading(false);
            }
        }
        securePage();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }


    function showMatchHandler(){
        router.push('/' + props.id);
    }
    return(
        <div>
            this is the match log page
        </div>

    )
}

export default StatisticsPage;