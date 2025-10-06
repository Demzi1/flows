'use client'

import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
import { authClient } from '@/utils/sign-in';
import { Octokit } from 'octokit';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from '@/components/ui/button';
import { get } from 'http';


 

const Home = () => {     


 const getToken = async()=>{

 


    try {
      const data1 =  {
          name :"notify telegram on PR 113",         
          status :"active",       
          trigger  :{ 
                repo: "dembojatta/hirewise",
                type: "github.pull_request.opened"
                },    
          actions :[
                {
                type: "slack.sendMessage",
                message: "New PR opened in repo by Demzi"
                }
        ],    
          "ownerId"   :"Q5ii0OBq5EYIFwx6yDyknv9tQjphtdsC"
        }
     
      const res = await fetch("http://localhost:3000/api/create", {method:"POST", credentials:"include",}
      )  
      const data = await res.json()
      // console.log(data)
      return data 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{

    getToken()
  },[])



  // useEffect(()=>{
  //    const loadData = async()=>{
  //       try {
  //           const accessToken = await getToken();
  //           const octokit = new Octokit({auth:`${accessToken.accessToken}`})
  //           const data = await octokit.rest.repos.listForAuthenticatedUser();
  //           console.log(data)
  //       } catch (error) {
  //         console.log(error)
  //       } 

  //     }

  //     loadData();
  // },[])
 









 





  const router = useRouter()

   const signOut = async()=>{
    try {
       await authClient.signOut({
        fetchOptions:{
            onSuccess: ()=>{
            router.push('/login')
            }
        }
      })
    } catch (error) {
      console.log(error)
    }
    }
  
  return (
   <header className='flex row justify-between h-[60px] items-center px-[25px] border-1 border-rose-500'>
    <div className='flex row justify-between gap-10'>
      <Link href="/">FLOWS</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/create">Create new flow</Link>
    </div>
    <div className='flex row justify-center items-center gap-6 '>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Button className='text-white bg-red-500 hover:bg-red-800 font-serif' onClick={signOut}>Logout</Button>
    </div>
   </header>
  )
}


export default Home