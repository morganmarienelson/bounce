import {prevMatchStats} from "../../../data/prevMatchStats";

export default function handler (req: any, res: any){
    const {matchId} = req.query;
    if (req.method === "GET"){
        const data = prevMatchStats.find(stats => stats.id === parseInt(matchId));
        res.status(200).json(data);
    } else if (req.method === "DELETE"){
        const deleteMatch = prevMatchStats.find(stats => stats.id === parseInt(matchId));
        const index = prevMatchStats.findIndex(stats => stats.id === parseInt(matchId));
        prevMatchStats.splice(index, 1);
        res.status(200).json(deleteMatch);
    }
}