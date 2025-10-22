import {Request, Response} from "express"
import { prisma } from "@/utils/auth";
import {queue} from "@/jobs/queue"
import { tryCatch } from "bullmq";
export const webhookController = async(req:Request, res:Response)=>{
    const event = req.headers['x-github-event']
    const payload = req.body;
    console.log(payload)

    res.send("This is webhook controller")


   
    
    // try {
    //         const flows = await prisma.flows.findMany(
    //             {where:{trigger:{
    //                  path: ['repo'],
    //             equals: 'test/flows',
    //             }}}
    //         )
    //         res.status(200).json(flows)

    //         flows.forEach(flow =>{
    //             flow.actions.forEach(action=>{
    //                     queue.add("runAction", {flowId: flow.id, action, payload},{})
    //          })
    
    // })
    // }
    // catch (e) {
    //     console.log(e)
    // }

    

    



    
    // }

}