
export interface  CustomersReview {
    name : string ;
    rate : number;
    image : string;
    comment: string;
    onPage : boolean
  }

  
export interface Productlist {
  id: number | string,
  name: string,
  product_image : string | Array<string>,
  tag: 'sales' | 'hot' | 'new' | 'default',
  price: number,
  color: any | {
    color: string
    color_code: string
 },
 colorCode : boolean | null | undefined
}
  
export interface  ProductDetail {
  name: string;
  product_code: string | undefined | null
  quantity: number | string,
    rate : number | string,
    image : string,
    tag: 'sales' | 'hot' | 'new'
    id: string | number,
    link: string,
    color: string | Array<string>,
    total_rate: string |  number

  }

