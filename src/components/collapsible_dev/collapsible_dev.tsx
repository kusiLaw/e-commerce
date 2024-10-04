import React, { useState } from 'react'
// import { FaMinus, FaPlus } from 'react-icons/fa'
import { FaPlus, FaMinus } from "react-icons/fa6";



interface props {
   title: string,
   open: boolean,
   size: string,
   children: React.ReactNode,
}


const TextCollapse = ({ title= 'Features', children , open = false, size =''} : props) => {
  const [display, setDisplay] = useState(open)


  return (
    <div className='text-default_blue border-t border-b  py-2'>
       <div className='flex flex-col gap-2'>
          <div className='flex flex-wr/a justify-between items-center  py-2'>
           <h3 className='flex items-center font-bold text-base'>
            {title}
           </h3>
           <div className='flex justify-end text-end font-normal' onClick={()=>{setDisplay(!display)}}>
              {display ? <div className='text-gray-600'><FaMinus /> </div> :
                  <div className='text-gray-600'> <FaPlus /> </div>
              }
           </div>
          </div>

          { display && <div className=' mb-2'>{children}</div>}

       </div>
    </div>
  )
}

export default TextCollapse
