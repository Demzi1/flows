import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@generated/prisma/client";
import { config } from "dotenv";

config();
 
export const prisma = new PrismaClient();
 
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret:process.env.BETTER_AUTH_SECRET, 

  socialProviders:{
    github:{
      clientId:process.env.GITHUB_CLIENT_ID as string,
      clientSecret:process.env.GITHUB_CLIENT_SECRET as string,  
      scope:["read:user",
        "user:email",
        "repo",
        "admin:repo_hook"]
    }
  },
  emailAndPassword:{
    enabled:true,
    autoSignIn:false,
    minPasswordLength:6
    
  },
  session:{

    
    expiresIn: 60*60*24*1,
    

  },
  trustedOrigins:[
    "http://localhost:5000"
  ],  
});