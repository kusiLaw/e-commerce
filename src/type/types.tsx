
export interface  CustomersReview {
    name : string ;
    rate : number;
    image : string;
    comment : string;
  }

  
export interface  Product {
    name : string ;
    rate : number | string;
    image : string;
    tag: 'sales' | 'hot' | 'new'
    id: string | number,
    link: string,
    color: string | Array<string>,
    total_rate: string |  number

    // reviews: Array<{ 
    //   comment : string,
    //   customer_name: string,
    //   customer_image: string,
    //   rate: number | string,
    // }>;
  }
