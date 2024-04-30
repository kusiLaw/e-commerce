'use server'

import { revalidatePath } from "next/cache"
import { baseUrl } from "./api"

export async function getData(relativeUrl = '') {
    const res = await fetch(baseUrl + relativeUrl)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  revalidatePath('/')
  return res.json()
}