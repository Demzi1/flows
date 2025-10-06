import { Request,Response } from "express"
import { fromNodeHeaders } from "better-auth/node"
import { auth } from "@/utils/auth"


export const getAccessToken = async(req:Request,res: Response)=>{
    try {
        
         const {accessToken} = await auth.api.getAccessToken({
        body:{
            providerId:"github",     
            
        }, 
        headers: fromNodeHeaders(req.headers)
        
    })

     res.status(200).json({accessToken})
    } catch (error) {
        console.log(error)
        res.status(500).json({"error": error})
    }
    
}