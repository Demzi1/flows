import { tryCatch, Worker } from "bullmq"

const worker = new Worker("webhook-events", async(job)=>{
// telegram bot send message




const {flowId, action, payload} = job.data

// let eventType = ''

// payload.events == 'pull_request'? eventType = 'pr': eventType='push'
    


const text = `Hi devs a was triggered. Kindly check github repo `

const chat_id = ''

// const {text,chat_id} = req.body
    try {
        const request = await fetch(`https://api.telegram.org/${process.env.TELEGRAM_ACCESS_TOKEN}/sendMessage`,
            {method:"POST",headers: { "Content-Type": "application/json" }, body:JSON.stringify({chat_id, text})})
        const data = await request.json()
        console.log(data)
    } catch (e) {
        console.log(e.message)
    }


}, {connection:{ host: "localhost", port:6379}})