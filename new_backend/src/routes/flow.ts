import express from "express";
import  {createFlow} from "@/controller/flow"

const router = express.Router()

router.post("/create",createFlow)

export default router;