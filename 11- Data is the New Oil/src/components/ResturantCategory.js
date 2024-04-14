import React, { useState } from 'react'
import ItemList from './ItemList'
const ResturantCategory = (props) => {
    
    const [showItems , setShowItems] = useState(false) 
    const handleClick = () => {
        setShowItems((prev) => !prev)
    }
  return (
    
    

    <div>
    <div className='w-6/12 mx-auto shadow-lg p-4  my-4'>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className='font-bold'>{props.data.title} ({props.data.itemCards.length})</span>
            <span>🔻</span>
        </div>
        { showItems && <ItemList items={props.data.itemCards}/>}
    </div>
    </div>
  )
}

export default ResturantCategory