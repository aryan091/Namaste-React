import React, { useMemo, useState } from 'react'
import findNthPrime from './utils/helper'

const MemoHook = () => {

    const [text , setText] = useState(0)
    const [theme , setTheme ] = useState('light')


    const prime = useMemo(() => findNthPrime(text), [text]);


    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    

      console.log("Rerendering..........!")

  return (
    <div className={` ${theme} `}>
    <div className='container flex items-center justify-center w-screen h-screen  border border-black text-yellow-500 bg-black dark:bg-[#414141] dark:text-white'>
        <div className='box  w-1/2 h-4/5 bg-slate-500 p-4'>

        <input

        className='text-black font-bold p-2 w-full'
        type="text"
        value={text}
        onChange={(e) => {
            setText(e.target.value)
            
        }}

        />

<div>
<h1 className='text-3xl font-bold text-center'> Nth Factorial is : {prime}</h1>

</div>

<div className={`flex items-center justify-center ${theme}`}>
    <button className='cursor-pointer  bg-gray-400 dark:bg-green-400 p-2 rounded-lg shadow-2xl font-bold' onClick={toggleTheme}>TOGGLE</button>
</div>

        </div>
    </div>

    </div>
  )
}

export default MemoHook