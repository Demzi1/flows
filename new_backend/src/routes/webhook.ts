import express, { Request, Response } from "express";

const router = express.Router()

router.post("webhook/github/flows",(req:Request, res:Response)=>{
    console.log(res.json())
})

export default router;