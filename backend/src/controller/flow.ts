import {Request, Response} from "express"
import { Octokit } from "octokit"
import { fromNodeHeaders } from "better-auth/node"
import { auth } from "@/utils/auth"
import ngrok from "ngrok"
import { prisma } from "@/utils/auth"


export const createFlow = async(req:Request, res:Response)=>{

      

    const {name, status,trigger,actions,ownerId} = req.body;

    try {
        // const session = await auth.api.getSession({ headers: fromNodeHeaders(req.headers) }) 
        

         const {accessToken} = await auth.api.getAccessToken({
                body:{
                    providerId:"github",     
                    userId:"Q5ii0OBq5EYIFwx6yDyknv9tQjphtdsC"
                    
                    
                }, 
                headers: fromNodeHeaders(req.headers)
                
        })

        
  // using ngrok for tunneling since localhost can't be registered as a webhook
        const url = await ngrok.connect({
            addr: 3000,  
            authtoken: process.env.NGROK_AUTHT_TOKEN as string,
        })


        const octokit = new Octokit({auth:`${accessToken}`})

        await octokit.rest.repos.createWebhook({
            owner:"Demzi1",
            repo:"flows",
            name:"web",
            config:{
                url:`${url}/api/webhook/github/flows`,
                content_type: "json",
                insecure_ssl: "0",
                secret: process.env.GITHUB_WEBHOOK_SECRET as string
            },
            events:['push', 'pull_request'],
            active:true  
        })

    
        // await prisma.flows.create({
        //    data:{
        //         name,
        //         status,
        //         trigger,
        //         actions,
        //         ownerId  
        //    }
        // })
         res.status(201).json({message:"flow created"})
    } catch (e) {
        res.status(500).json({message:"something went wrong"})
        console.log(e)
    }
 
}

