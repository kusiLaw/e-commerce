import React from 'react'
import { useFormStatus } from "react-dom";


const Submit = ({text='', pending_text=''}) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}
        type="submit"
        className={` flex w-full justify-center rounded-md bg-blue-context font-semibold  px-2 py-2  font- leading-6 text-lg capitalize
        text-white shadow-sm  hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
          
          {pending ? pending_text : text}
    </button>
  )
}

export default Submit