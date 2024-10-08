import React from 'react'

const CheckBox = ({name = '', value ='', label='', inverse=false}) => {
  return (
    <div className={`flex  ${inverse ? `flex-row-reverse`:``} justify-between items-center`}>
       <label htmlFor={name} className='ms-2 text-sm font-medium '>{label} </label>
       <input type="checkbox" id="scales" name={name}className='w-6 h-[16px] text-blue-context bg- border-gray-300 rounded focus:ring-blue-500 ' />
   </div>
  )
}

export default CheckBox