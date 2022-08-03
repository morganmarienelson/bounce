import {matches} from "../../../data/matches";

export default function handler(req, res){
    if (req.method === "GET"){
        res.status(200).json(matches)
    } else if (req.method === "POST"){
        const newMatch = {
            id: Date.now(),
        }
        matches.push(newMatch);
        res.status(201).json(newMatch);
    }

}