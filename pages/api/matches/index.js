import {matches} from "../../../data/matches";

export default function handler(req, res){
    if (req.method === "GET"){
        res.status(200).json(matches)
    } else if (req.method === "POST"){
        const match = req.body.match;
        const newMatch = {
            id: Date.now(),
            playerName: match.playerName,
            opponentName: match.opponentName,
            courtType: match.courtType,
            location: match.location,
            setting: match.setting,
            matchType: match.matchType,
            notes: match.notes,
        }
        res.status(201).json(newMatch);
    }

}