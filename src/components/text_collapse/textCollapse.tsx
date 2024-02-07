import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'


const TextCollapse = ({title= '', children, open = false}) => {
  const [display, setDisplay] = useState(open)


  return (
    <div className='text-default_blue border-t border-b  py-2'>
       <div className='flex flex-col gap-4'>
          <div className='flex flex-wr/a justify-between items-center px- py-2'>
           <h3 className='flex items-center '>
             Features
           </h3>
           <div className='flex justify-end text-end font-normal' onClick={()=>{setDisplay(!display)}}>
              {display ? <div className='text-gray-600'><FaMinus /> </div> :
                  <div className='text-gray-600'> <FaPlus /> </div>
              }
           </div>

          </div>

          { display && <div className=' px-2 py-4 mb-2'>{children}</div>}

       </div>
    </div>
  )
}

export default TextCollapse
