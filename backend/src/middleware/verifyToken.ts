import { NextFunction, Request, Response } from "express";
import { auth } from "@/utils/auth";
import { fromNodeHeaders } from "better-auth/node";

export const verifyToken = async(req:Request, res:Response, next: NextFunction)=>{
    
    try {
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers)
        })

        if(!session || !session.user){
            res.status(401).json({message: "session expired"})
            return
        }

        (req as any).user = session.user
        
        next()
    } catch (e) {
        console.log("Token verification failed: ", e)
        res.status(401).json({message: "unauthorised"})
    }
}