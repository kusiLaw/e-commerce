'use server'

import { revalidatePath } from "next/cache"
import { baseUrl } from "./baseurls"
import { notFound } from 'next/navigation'

export async function getData(relativeUrl = '') {
  const res = await fetch(baseUrl + relativeUrl);
  
    const data = await res.json()
    console.log(data, 'utyty')
    // return Response.json(data)
 
      revalidatePath('/')
  
    return data
}

