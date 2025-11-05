import { Webhooks } from "@octokit/webhooks";
import { Request, Response } from "express";

const webhooks = new Webhooks({
  secret: process.env.GITHUB_WEBHOOK_SECRET,
});

export const verifyWebhookDelivery = async (req:Request) => {
    try {
       const signature = req.headers["x-hub-signature-256"] as string;
       const body = await req.body.toString("utf8");
       return await webhooks.verify(body, signature)
    } catch (e) {
      console.log("payload verification failed: ", e)
    }  
};
