import { tryCatch, Worker } from "bullmq"

const worker = new Worker("webhook-events", async(job)=>{
// telegram bot send message

const url = `https://api.telegram.org/${process.env.TELEGRAM_ACCESS_TOKEN}/sendMessage`

try {
    await fetch(url,
        {method:'post',
         body:JSON.stringify({  chat_id: "",   text:'testing'})
        })
} catch (e) {
    console.log(e)
}



const {flowId, action, payload} = job.data


}, {connection:{ host: "localhost", port:6379}})