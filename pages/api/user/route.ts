import {NextResponse} from "next/server";
import {db} from "../../../lib/db";
import {hash} from "bcrypt";

export async function POST(req: Request) {
   try {
       const body = req.json();
       const {email, password, userName, firstName, lastName} = body;

        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        });
        if (existingUserByEmail){
            return NextResponse.json({user: null, message: "There is already an account associated with this email address"}, {status: 409});
        }

       const existingUserByUsername = await db.user.findUnique({
           where: {userName: userName}
       });
       if (existingUserByUsername){
           return NextResponse.json({user: null, message: "This username already exists"}, {status: 409});
       }


        const hashedPassword = await hash(password, 10);
       const newUser = await db.user.create({
           data: {
               userName,
               email,
               password: hashedPassword,
               firstName,
               lastName
           }
       });
       const {password: newUserPassword, ...rest} = newUser;
       return NextResponse.json({user: newUser, message: "User was created successfully"}, {status: 201});
   } catch(error){
       return NextResponse.json({user: newUser, message: "Something went wrong"}, {status: 500});
   }
}