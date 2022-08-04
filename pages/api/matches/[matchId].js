import {prevMatchStats} from "../../../data/prevMatchStats";

export default function handler (req, res){
    const {matchId} = req.query;
    const data = prevMatchStats.find(stats => stats.id === parseInt(matchId));
    res.status(200).json(data);
}