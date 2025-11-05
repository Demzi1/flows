import {Request, Response} from "express"
import { prisma } from "@/utils/auth";
import {queue} from "@/jobs/queue"
import {verifyWebhookDelivery} from '@/middleware/verifyDelivery'



export const webhookController = async(req:Request, res:Response)=>{
    const event = req.headers['x-github-event']
    const payload = req.body;
    
   const verify = verifyWebhookDelivery(req)

   if(!verify){
    res.status(401).send('unauthorized')
   }
   
   const repoName = payload.repository.full_name
    
    try {
            const flows = await prisma.flows.findMany(
                {where:{trigger:{
                     path: ['repo'],
                equals: repoName,
                }}}
            )
            console.log(flows)
            res.status(200).json(flows)

            flows.forEach(flow =>{
                flow.actions.forEach(action=>{
                        queue.add("runAction", {flowId: flow.id, action, payload, event},)
             })
    
    })
    }
    catch (e) {
        console.log(e)
    }    
}

