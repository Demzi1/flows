import express, { Router } from "express"
import { getAccessToken } from "@/controller/acessToken";

const router = express.Router();

router.get("/accesstoken",getAccessToken);

export default router;