import React from 'react'

const CheckBox = ({name, value }) => {
  return (
    <div className='flex  justify-between items-center'>
       <label htmlFor={name} className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>{name} </label>
       <input type="checkbox" id="scales" name={name}className='w-6 h-[16px] text-blue-context bg-black border-gray-300 rounded focus:ring-blue-500 ' />
   </div>
  )
}

export default CheckBox