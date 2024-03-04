
import { useState } from "react"

const Input = ({type = 'text', placeholder='', required = false, label = '', controlInput= false, controlFn = (e:any,fn:any)=> {} }) => {
  const [input, setInput] = useState('')

  return (
    <div>
        <label htmlFor="last_name" className="block mb-2  font-medium text-gray-500 capitalize ">{label}</label>
            <input type={type} id={label} name={label} className="
    bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
     shadow-sm outline-0
             "
               placeholder= {placeholder} required ={ required} 
               onChange={(e)=>{controlInput ? controlFn(e, setInput) : setInput(e.target.value)}}
               value={input}
               />
    </div>
  )
}

export default Input