import User from "@/models/user";
import { rejects } from "assert";
import bcryptjs from "bcryptjs"
import Connection from "@/database/config";

Connection();

export const POST = async(NextRequest)  => {
    try {
        const body = await NextRequest.json();
        const {name, username,password} = body;

        if(!name || !username || !password){
            return new Response("Name, username and password required",{status:401});
        }
        console.log(username)
        const user = await User.find({username})
        console.log(user)
        if(user.length){
            return new Response("Username already exists", {status : 400})
        }

        const salt = await bcryptjs.genSalt(12);
        console.log(salt)
        const hashedPassword = await bcryptjs.hash(password,salt);

        const newUser = new User({
            name,
            username,
            password : hashedPassword
        })

        await newUser.save();

        return new Response("User saved successfully", {status :200});

    } catch (error) {
        console.log(error);
    }
}