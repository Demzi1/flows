import {Request, Response} from "express"
import { prisma } from "@/utils/auth";
import {queue} from "@/jobs/queue"
import { tryCatch } from "bullmq";
export const webhookController = async(req:Request, res:Response)=>{
    const event = req.headers['x-github-event']
    const payload = req.body;
    console.log(payload)
    

    // const flows = await prisma.flows.findMany({
    //     where:{trigger:
    //         {
    //             // type: `github.${event}` ,
    //             // repo: "demzi/flows"
    //         }}
    // })

    

    //   flows.forEach(flow =>{
    //     flow.actions.forEach(action=>{
    //           queue.add("runAction", {flowId: flow.id, action, payload})
    //     })

    //     res.status(200).send("webhook received")

    
    //  })
    // const {text,chat_id} = req.body
    // try {
    //     const request = await fetch(`https://api.telegram.org/${process.env.TELEGRAM_ACCESS_TOKEN}/sendMessage`,
    //         {method:"POST",headers: { "Content-Type": "application/json" }, body:JSON.stringify({chat_id, text})})
    //     const data = await request.json()
    //     console.log(data)
    //     res.status(200).json({message:"sent"})
    // } catch (e) {
    //     console.log(e.message)
    // }

}