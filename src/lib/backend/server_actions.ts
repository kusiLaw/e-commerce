'use server'

import { revalidatePath } from "next/cache"
import { baseUrl } from "./baseurls"
// import { notFound } from 'next/navigation'


// const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));



export async function getData(relativeUrl = '') {
  try {
      const res = await fetch(baseUrl + relativeUrl);
console.log(baseUrl + relativeUrl)
      const data = await res.json()
    
      // await sleep(1000)
      // revalidatePath('/')
      
      return data
  }catch{
     return undefined
  }

}

