import Prompt from "@/models/prompt";
import { dbConnect } from "@/utils/mongodb"
import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const {userId, promtp, tag} = await req.json();
    try {
        await dbConnect();
        const newPrompt = new Prompt({
            creator: userId,
            tag,
            promtp
        })
        await newPrompt.save();
        // return new Response (JSON.stringify(newPrompt))
        return new NextResponse.json({newPrompt}, {status:201})
    } catch (error) {
        
    }
   
}