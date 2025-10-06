'use client'

import { createAuthClient } from "better-auth/react"



export const authClient = createAuthClient({baseURL:"http://localhost:3000"});

   
export const signIn = async()=>{ 
        
         const {data,error} = await authClient.signIn.social({
            provider: "github",
            callbackURL:"http://localhost:5000/home",
        })

};

