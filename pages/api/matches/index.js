import {matches} from "../../../data/matches";

export default function handler(req, res){
    if (req.method === "GET"){
        res.status(200).json(matches)
    } else if (req.method === "POST"){
        const playerName = req.body.match.playerName
        const newMatch = {
            id: Date.now(),
            playerName: playerName,
        }
        matches.push(newMatch);
        res.status(201).json(newMatch);
    }

}