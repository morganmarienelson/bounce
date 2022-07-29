import {useRouter} from "next/router";

function StatisticsPage(props){
    const router = useRouter();

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