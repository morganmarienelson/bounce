import {db} from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next"
import {NewUserRequest} from "../../types/newUserRequest";
import {hash} from 'bcrypt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const  user: NewUserRequest = await req.body;
        if (req.method == "POST"){
            try{
                        const existingUserByEmail = await db.user.findUnique({
            where: {email: user.email}
        });
        if (existingUserByEmail){
            res.status(409).json({ message: 'This email is already associated with an account.' });
        }

       const existingUserByUsername = await db.user.findUnique({
           where: {username: user.username}
       });
       if (existingUserByUsername){
           res.status(409).json({ message: 'This username is already associated with an account.' });
       }

        const hashedPassword = await hash(user.password, 10);
                await db.user.create({ data:
                        {email: user.email,
                            username: user.username,
                            password: user.password,
                            firstName: user.firstName,
                            lastName: user.lastName
                        } ,
                })
                res.status(200).json({ message: 'Success' })
            } catch (error){
                res.status(400).json({ message: 'Error when creating user' })
            }
        }
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong, function did not get into POST' })
    }
}