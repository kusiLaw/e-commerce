'use client'
import OrderSummary from '@/components/orders/order_summary'
import Image from 'next/image'
import { products} from '@/data/mock'
import CartProduct from '@/components/cart/product'
import Input from '@/components/form/input'
import { assistant } from '@/components/font'
import CheckBox from '@/components/form/checkbox'
import Link from 'next/link'
import Submit from '../../../../components/form/submit'


const Checkout = (
  {
  searchParams,
}: {
  searchParams?: {
    name?: string;
    page?: string;
  };
  }
) => {

  async function handleCheckout(formData,) {
    let u =   setTimeout(() => 'hghgfhfg',40000)
    console.log(formData.get('city'), 'hjhjhhjhjjhjhjhjjhj===', u)
      
    // check if the person is authentication
    //if authenticated get data from server
    //if not get data from local storage
    // make transactions
  };


// async function addToCart(formData) {
//     'use server'
//     const productId = formData.get('productId')
//     await updateCart(productId)
//   }


    //********* ENABLE THIS CODE IF YOU WANT HANDLE PAYMENT BY YOURSELF,  *******************/

  // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('visa');
 

  // const handleChange = (event:any, fn =(e:any)=>{''}) => {
  //   event.stopPropagation()
  //   console.log(event.target.value)
  //   fn(event.target.value);
  // };

  // const handleCardNumber = (event:any, setFn:any) =>{
  //     let card = event.target.value
  //     card = card.replace(/\s+/g, '')
  //     card = card.match(/.{1,4}/g) || [];
  //     console.log(card.join(''))
  //     setFn(card.join('  '))
  // }

  //********* BRAINTREE DROPPING UI HERE, YOU MUST COMMENT THIS IF YOUR HANDLE PAYMENT BY YOURSELF ,  *******************



  let pro = products.slice(1,4) // fetch cart data either from server or localstorage

  return (
    <div className={`${assistant.className} bg-white w-full  flex justify-center mt-28 mb-20 `}>
      <div className=' w-[90%] flex flex-col-reverse md:flex-row gap-4 justify-center border rounded-md shadow- border-t-4 border-t-blue-context'>
        <div className='w-full  md:w-[50%]   p-10 md:pr-12'>
          <form action={handleCheckout}>
            <div>
              <p className='capitalize mb-4 font-medium'>shipping address</p>
              <div className='mb-4'>
                <Input name='email' label='email address' type='email' placeholder='Email Address' required />
              </div>
                
              <div className='mb-4'>
                  <Input label='address' name='address' type='text' placeholder='Address' required/>
              </div>
              <div className='mb-4'>
                  <Input label='apartment / suit' name='apartment' type='text' placeholder='Email' required/>
              </div>
              <div className='mb-4 flex justify-between '>
                  <Input label='City' type='text'  name='city' placeholder='City'/>
                  <Input label='State / Province' type='text' name='state' placeholder='State Province' required/>

                  <Input label='postal code' type='text' name='post-code' placeholder='Post code' required/>
              </div>
              <div className={'mt-10'}>
                <Submit text='buy now' pending_text='making payment...'/>
              </div>
            </div>
    
           {/* ******** ENABLE THIS CODE IF YOU WANT HANDLE PAYMENT BY YOURSELF,  ****************** */}
           {/* <div>
              <div>
                <div className='flex justify-between  mb-3 mt-6 '>
                  <p className='capitalize font-medium'>payment details</p>
                  <div className='flex justify-end  '>
                    <Image src={'/visa.svg'} alt='visa icon' width={30} height={30}/>
                    <Image src={'/paypal.svg'} alt='visa icon' width={40} height={40}/>
                    <Image src={'/mastercard.svg'} alt='visa icon' width={30} height={30}/>

                  </div>
                 
                </div>
                
                 <div className='flex gap-4 border-b pb-4'>
                    <>
                      <input type="radio" id={'visa'} name={'visa'} value={'visa'} className="hidden peer" 
                        required checked={selectedPaymentMethod === 'visa'}
                        onChange={(e)=> handleChange(e, setSelectedPaymentMethod)} />
                        <label htmlFor={'visa'} className={`inline-flex items-center justify-between w-fit p-1
                            text-gray-500 bg-white shadow-sm peer-checked:shadow-blue-context/50 border border-gray-200 rounded-lg cursor-pointer 
                              peer-checked:border-blue-context peer-checked:text-blue-context hover:text-gray-600 hover:bg-gray-100
                              `}>    <p className="font-semibold text-center w-[5rem]">
                              
                              Visa</p>
                        </label>
                    </>
                   
                    <>
                    <input type="radio" id={'paypal'} name={'paypal'} value={'paypal'} className="hidden peer" 
                            required checked={selectedPaymentMethod === 'paypal'}
                            onChange={(e)=> handleChange(e, setSelectedPaymentMethod)} disabled />
                      <label htmlFor={'paypal'} className={`inline-flex items-center justify-between w-fit p-1 px-2
                          text-gray-500 bg-white shadow-sm peer-checked:shadow-blue-context/50 border border-gray-200 rounded-lg cursor-pointer 
                            peer-checked:border-blue-context peer-checked:text-blue-context hover:text-gray-600 hover:bg-gray-100 
                            peer-disabled:border-gray-200   peer-disabled:text-gray-200  peer-disabled:shadow-white peer-disabled:bg-gray-100
                            `}>    <p className="w-[5rem] text-center font-semibold  capitalize ">
                            
                              paypal</p>

                              
                        </label>
                    
                    </>
                      
                 
                 </div>
               
              
              
                 <div className='mt-4'>
                      <div className='mb-4'>
                          <Input label='Name on card' type='text' placeholder='Name'/>
                      </div>
                      <div className='mb-4'>
                          <Input label='card number' type='text' placeholder='xxxx xxxx xxxx xxxx'  controlInput 
                          controlFn={handleCardNumber}
                          />
                      </div>
                      <CheckBox inverse label='Billing address is the same as shipping address'/>
                      
                    <div className='mt-6 flex justify-between '>
                       <div className='mb-4 w-[60%]'>
                          <Input label='Expiration date (MM/YY)' type='text' placeholder='(MM/YY)'/>
                      </div>
                      <div className='mb-4 w-[35%]'>
                          <Input label='CVC' type='text' placeholder='123'/>
                      </div>
                    </div>
                    
                  </div>
                   
              </div>
           </div>
          */}

            
            {/********* BRAINTREE DROPPING UI HERE, YOU MUST COMMENT THIS IF YOUR HANDLE PAYMENT BY YOURSELF ,  *******************/}
            

          </form>
        </div>
        <div className='w-full md:w-[50%] divide-y bg-gray-50 p-10 pl-12'>
           <div className='mb-12'>
               <CartProduct />
           </div>
          <div className='pt-10                          '>
             <OrderSummary orders={pro} tax={57} shipping={0}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout