import { Queue } from "bullmq";


export const queue = new Queue("webhook-events", {
    connection:{ host: "localhost", port:6379}
});