import express from "express";
import  {createFlow} from "@/controller/flow"
import { verifyToken } from "@/middleware/verifyToken";

const router = express.Router()

router.post("/create", verifyToken, createFlow)

export default router;