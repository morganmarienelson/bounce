import {NextResponse} from "next/server";
import {db} from "../../lib/db";
import {hash} from "bcrypt";
import {z} from "zod";

const userSchema = z.object(
    {
        username: z.string().min(1, 'Username is required').max(100),
        email: z.string().min(1, 'Email is required').email('Invalid email'),
        password: z.string().min(1, 'Password is required'),
        firstName: z.string().min(1, 'First name is required'),
        lastName: z.string().min(1, 'Last name is required'),
    }
)
export async function POST(req: Request) {
   try {
       const body = await req.json();
       const {email, password, username, firstName, lastName} = userSchema.parse(body);
        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        });
        if (existingUserByEmail){
            return NextResponse.json({user: null, message: "There is already an account associated with this email address"}, {status: 409});
        }

       const existingUserByUsername = await db.user.findUnique({
           where: {username: username}
       });
       if (existingUserByUsername){
           return NextResponse.json({user: null, message: "This username already exists"}, {status: 409});
       }

        const hashedPassword = await hash(password, 10);
       const newUser = await db.user.create({
           data: {
               username,
               email,
               password: hashedPassword,
               firstName,
               lastName
           }
       });
       const {password: newUserPassword, ...rest} = newUser;
       return NextResponse.json({user: newUser, message: "User was created successfully"}, {status: 201});
   } catch(error){
       return NextResponse.json({ message: "Something went wrong"}, {status: 500});
   }
}