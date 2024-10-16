import React, { EventHandler, useEffect } from 'react'
import { useState,useRef } from 'react'
import { FiPlus, FiMinus  } from "react-icons/fi";

import "./numberInput.css"

const NumberInput = () => {

  const [inputValue, setInputValue] = useState(1)

  const handleInput= (e:any) => {
    e.stopPropagation()

    if(e.target.name === 'quantity' && (e.target.value >= 1 && e.target.value  <= 1000 )){
      setInputValue(parseInt(e.target.value))
      return
    } 

    let name  = e.target.name ||  e.target.parentElement.name // solve icon inner element
    if(name === 'plus') {
      setInputValue(inputValue =>  inputValue  + 1)
    } else{
      inputValue - 1 >= 1  && setInputValue(inputValue => inputValue - 1)
    } 
  }

  return (
    <div className="relative flex items-center  ">
        <button type="button" name='minus' className="flex-shrink-0  bg-gry-100 border hover:bg-gray-100  inline-flex text-gray-700
      items-center justify-center rounded-md p-1   disabled:text-gray-400 disabled:border-gray-200
      focus:outline-none " onClick= {e => handleInput(e)} disabled = {inputValue === 1 }>
        <FiMinus name='minus' />
      </button>
      <input type="number" id="counter-input" name = 'quantity' data-input-counter className="flex-shrink-0 text-gray-900  border mx-2
       bg-transparent text-sm font-normal  focus:outline-none focus:ring-0 max-w-[2.5rem] text-center rounded-md p-[0.2rem]" placeholder="" value={inputValue}  required 
       onChange= {e => handleInput(e)} min="1" max="1000"/>
     <button type="button" name='plus' id='plus'  className="flex-shrink-0  bg-gry-100 border hover:bg-gray-100 inline-flex text-gray-700
      items-center justify-center rounded-md p-1   disabled:text-gray-200 disabled:border-gray-200
      focus:outline-none" onClick= {e => handleInput(e)} disabled = {inputValue >= 1000 } >
        <FiPlus onClick= {e => handleInput(e)}  name='plus'/>
      </button>
    
  </div>

  )
}

export default NumberInput
