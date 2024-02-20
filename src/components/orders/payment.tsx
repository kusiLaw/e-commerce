import Image from "next/image"

const PaymentDetails = ({payment=''}) => {
   
    return (
      <div className=" w-full md:w-[30%]">
        <div className="flex  justify-between">
            <h2 className='text-lg font-medium'>Payment Details</h2>
            <Image alt={'visa'} src={'/visa.svg'} height={40} width={40}/>
        </div>
       
            <div className='flex flex-col gap-2 mt-2 font-light text-gray-400 '>
           
            <p>Card ending with: ...3515</p>
            <p>Current: GBP 549.00</p>
            <p>Payment: Successful </p>
            <p>Jan 29, 2024</p>
              
          </div>
    </div>
    )
  }
  
  export default PaymentDetails