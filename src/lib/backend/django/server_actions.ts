'use server'

import { revalidatePath } from "next/cache"
import { baseUrl } from "./api"

export async function getData(relativeUrl = '') {
  const res = await fetch(baseUrl + relativeUrl)
  console.log(baseUrl + relativeUrl)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
      // await new Promise((resolve) => setTimeout(resolve, 30000));

 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  revalidatePath('/')
  return res.json()
}