import express, { Request, Response } from "express"
import { config } from "dotenv"
import { toNodeHandler } from "better-auth/node"
import cors from "cors"

import {auth} from "@/utils/auth"
import accessTokenRoutes from "@/routes/accessToken"
import githubRoutes from "@/routes/webhook"
import createFlowRoutes from "@/routes/flow"


const app = express()

config()

app.use(cors({
    origin:"http://localhost:5000",
    methods:["GET","POST","PUT","DELETE"],
    credentials: true
}))

app.all("/api/auth/{*any}",toNodeHandler(auth))

app.use(express.json())

app.use("/api", accessTokenRoutes)
app.use("/api", createFlowRoutes)
app.use("/api", githubRoutes)




const port = process.env.PORT || 3000


app.get("/",(req:Request, res:Response)=>{
    res.send("hello")
})



 const start = async()=>{
  try {

    app.listen(port, () => {
      console.log("Server running on 3000");
    });
  } catch (err) {
    console.error("Startup error:", err);
  }
}
  
start()



