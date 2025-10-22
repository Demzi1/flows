import express, { Request, Response } from "express";
import { webhookController } from "@/controller/webhook";

const router = express.Router()

router.post("/webhook/github/flows",webhookController)

export default router;