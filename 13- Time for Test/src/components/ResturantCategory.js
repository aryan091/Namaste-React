import React, { useState } from 'react'
import ItemList from './ItemList'

const ResturantCategory = ({ data, showItems, setShowIndex, currentIndex, index }) => {

  
  const handleClick = () => {
    console.log("Clicked index:", index);
    console.log("Current index:", currentIndex);
    if (currentIndex === null || currentIndex !== index) {
      setShowIndex(index);
    } else {
      setShowIndex(null);
    }
  };


  return (
    <div>
      <div className='w-6/12 mx-auto shadow-lg p-4 my-4'>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}
        >
          <span className='font-bold'>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
        {showItems && <ItemList items={data.itemCards} isCart={false} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
