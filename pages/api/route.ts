// import {NextResponse} from "next/server";
import {db} from "../../lib/db";
// import {NextApiResponse} from "next";
// import {em} from "polished";
//
// export default async function POST(req: Request, res:NextApiResponse) {
//    if (req.method !== 'POST'){
//        return res.status(405).json({message: "Method not allowed"})
//    }
//     try {
//        const data = await req.json();
//        const {email, password, username, firstName, lastName} =  data;
//        //  const existingUserByEmail = await db.user.findUnique({
//        //      where: {email: email}
//        //  });
//        //  if (existingUserByEmail){
//        //      return NextResponse.json({user: null, message: "There is already an account associated with this email address"}, {status: 409});
//        //  }
//        //
//        // const existingUserByUsername = await db.user.findUnique({
//        //     where: {username: username}
//        // });
//        // if (existingUserByUsername){
//        //     return NextResponse.json({user: null, message: "This username already exists"}, {status: 409});
//        // }
//
//         // const hashedPassword = await hash(password, 10);
//         console.log('here');
//        const newUser = await db.user.create({
//            data: {
//                username,
//                email,
//                password,
//                firstName,
//                lastName
//            }
//        });
//         console.log('not here');
//        console.log(newUser);
//        // const {password: newUserPassword, ...rest} = newUser;
//        return NextResponse.json({user: newUser, message: "User was created successfully"}, {status: 201});
//    } catch(error){
//        return NextResponse.json({ message: "Something went wrong"}, {status: 500});
//    }
// }


import { NextApiRequest, NextApiResponse } from "next"
import {UserSignUp} from "../../types/userSignUp";
import {NewUserRequest} from "../../types/newUserRequest";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const  user: NewUserRequest = await req.body;
        if (req.method == "POST"){
            console.log(user);
            try{
                console.log(user.username)
                await db.user.create({ data:
                        {email: req.body.email } ,
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