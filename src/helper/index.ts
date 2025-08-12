import { getLocalStorage, setLocalStorage } from './localStorage';
import { ProductDetail } from '@/type/types';

export const TotalCartQuantity = (cart: any[]) => {
  return cart.reduce((acc, item) => acc + Number(item.quantity), 0);
}

export const TotalCartPrice = (cart: any[]) => {
  return cart.reduce((acc, item) => acc + Number(item.price) * Number(item.quantity), 0).toFixed(2);
}

export const getLocaltCartItems = () => { 
   const cart = getLocalStorage('cart') || [];
   return Object.values( cart) 
}

export const filterCartItems = (cart: any[], id: string | number) => {
  return cart.filter(item => item.id === id);
}

const removeCartItem = (cart: any[], id: string | number) => {
  return cart.filter(item => item.id !== id);
}

export const RemoveProductFromCart = (id: string | number) => {
  const cart =  getLocalStorage('cart') || [];
  const product = Object.values(cart)

  const updatedCart = removeCartItem(product, id);
  let newCart: { [key: string]: ProductDetail } = {};
  updatedCart.forEach((cart: ProductDetail) => {
    newCart[cart.id] = cart;
  })
 return newCart
}

export  {getLocalStorage, setLocalStorage}