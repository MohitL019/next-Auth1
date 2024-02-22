import User from "@/models/user";
import { rejects } from "assert";
import bcryptjs from "bcryptjs"
import Connection from "@/database/config";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
Connection();

export const POST = async(NextRequest)  => {
    try {
        const body = await NextRequest.json();
        const {username,password} = body;

        if(!username || !password){
            return new Response(" username and password required",{status:401});
        }
        console.log(username)
        const user = await User.findOne({username})
        console.log(user)
        if(!user){
            return new Response("Username does not exist", {status : 400})
        }
        const validPassword = await bcryptjs.compare(password,user.password);
        if(!validPassword){
            return new Response("Incorrect password", {status : 400})
        }
        console.log("end")
        const tokenData = {
            username : user.username,
            id : user._id
        }

        const token = jwt.sign(tokenData,process.env.JWT_SECRETKEY, {expiresIn : "900"});

        const response = NextResponse.json({message:"login successfull"});
        response.cookies.set('token',token,{httpOnly:true});
        return response;

    } catch (error) {
        console.log(error);
        return new Response("Something went wrong", {status:500})
    }
}