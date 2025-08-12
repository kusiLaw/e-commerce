import { ProductDetail } from "@/type/types";


export function getLocalStorage(key: string ): any {
  if (typeof window !== 'undefined') {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Error getting localStorage item "${key}":`, error);
      return null;
    }
  }
//   return null;
}


export function setLocalStorage(key: string | number, value: ProductDetail) {
  if (typeof window !== 'undefined') {
      try {
        const existingValue = getLocalStorage('cart') || {};
        const updatedValue = { ...existingValue, [key]: value }; // Spread the existingValue and add the new key-value pair
        
      localStorage.setItem('cart', JSON.stringify(updatedValue));
    } catch (error) {
      console.error(`Error setting localStorage item "${key}":`, error);
    }
  }
}