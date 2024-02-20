import React from 'react'
import ProgressBar from '../progress_bar'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from 'next/link';


const OrderStatus = ({orderStatus= 'placed', as_invoces = false}) => {

    const orderIndex ={
        placed: 20,
        confirmed: 40,
        processing: 60,
        shipped: 80,
        delivered: 100
    }
    
  return (
    <div>
                <div className={'flex justify-between  py-3  w-full'}>
                <div className='flex items-end'>
                    <h2 className=' text-xl font-semi-bold mr-3 '>Order #54879</h2>
                   { !as_invoces && <Link href={''} className='text-sm text-blue-context 
                    hover:underline hover:underline-offset-4 font-semi-bold'> View invoice -{'> '}</Link>
                    }
                </div>
                <p className='hidden md:inline-block -end tracking-tight text-sm'>Order placed Jan 22, 2024</p>
            </div>
            
            <div className=''>
                <div className='drop-shadow-sm'>
                <ProgressBar percentage={orderIndex[orderStatus] || 0 } bg ={'#0672cb'} height={0.6}/>
                </div>
            
                <div className='hidden md:flex  flex-initial mt-3'>
                    {Object.keys(orderIndex).map(key =>(
                        <div key={key} className='w-[20%]'>
                    
                            <div className='hidden md:flex items-center font-serif capitalize '>
                                <p  className='font-[500]'> {key} </p>
                                {  (orderIndex[key]  <= orderIndex[orderStatus]) &&
                                <span className={`ml-2 text-2xl text-blue-context font-black` }>
                                    <IoIosCheckmarkCircleOutline/>
                                </span>
                                }
                            </div>
                            {
                                (orderIndex[key]  <= orderIndex[orderStatus]) &&
                                <p className='hidden md:inline-block text-gray-500 font-normal text-[0.7rem]
                                tracking-tight leading-5 '>Jan 11, 2024</p>

                            }
                        </div>
                    ))}
                
                </div>
                {/* display only current order status on small device */}
                <div className='flex flex-col md:hidden w-full mt-2 '>
                    
                    <div className='flex items-center font-serif capitalize '>
                        <p className='font-[500]'> {orderStatus} </p>
                    
                        <span className={`ml-2 text-2xl text-blue-context font-black` }>
                            <IoIosCheckmarkCircleOutline/>
                        </span>
                
                    </div>
            
                    <p className='block text-gray-600 font-normal text-[0.7rem]
                    tracking-tight leading-5 '>Jan 11, 2024
                    
                    </p>
                </div>

            </div> 
    </div>
  )
}

export default OrderStatus