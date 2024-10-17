import { getData } from "./backend/django/server_actions";
import { ProductDetail } from "@/type/types";


export async function addToCart(formData:any) {
    console.log(formData.get('productId'))
    let product = await getData(formData.get('productId')) 
    console.log(product)
}