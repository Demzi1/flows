import { tryCatch, Worker } from "bullmq"

const worker = new Worker("webhook-events", async(job)=>{
    if (job.name === 'runAction') {
            const {flowId, action, payload, event} = job.data

            let text = ''

            if (event === 'push'){
                text = `A push event was triggerd by ${payload.pusher.name} on on branch: ${payload.ref}`
            }
            else{
                if(payload.action === 'open'){
                    text = `PR #${payload.pull_request.number} opened by ${payload.pull_request.user.login}`
                }
                else if (action === 'closed') {
                if (payload.pull_request.merged) {
                    text = `PR #${payload.pull_request.number} was merged by ${payload.pull_request.merged_by.login}`;
                } else {
                    text = `PR #${payload.pull_request.number} was closed without merging`;
                }
                }
            }
                
            // send telegram message
            const chat_id = '-1003022642700'

                try {
                    const request = await fetch(`https://api.telegram.org/${process.env.TELEGRAM_ACCESS_TOKEN}/sendMessage`,
                        {method:"POST",headers: { "Content-Type": "application/json" }, body:JSON.stringify({chat_id, text})})
                    const data = await request.json()
                    console.log(data)
                } catch (e) {
                    console.log(e.message)
                }
            }

}, {connection:{ host: "localhost", port:6379}})