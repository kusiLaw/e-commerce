'use server'

import { revalidatePath } from "next/cache"
import { baseUrl } from "./urls"
import fs from 'fs';
import path from 'path';

export async function getData( relativeUrl = '') {
  
  

   const file = path.join(process.cwd(), '/src/data/products.json');
  
    try {
      const data = fs.readFileSync(file, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      return []
    }




  

}

