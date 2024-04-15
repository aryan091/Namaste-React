import React from 'react'
import { useSelector } from 'react-redux'

import { useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import ItemList from './ItemList';
const Cart = () => {

    // Subscribing to the store using useSelector
  const cartItems = useSelector((store) => store.cart.items)

  console.log("CartItems : ",cartItems)

  const dispatch = useDispatch();
  

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='text-center p-4 m-4 '>
      <div className='flex justify-around'>
      <h1 className='text-2xl font-bold'>Cart</h1>
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
        
        <div className="w-6/12 m-auto">
        
        <div className='text-center m-4 p-4'>
        {cartItems?.length === 0 && (
          <h1 className='text-lg font-bold text-gray-500'> Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems} isCart={true}  />
        </div>
       
      </div>
    </div>
  )
}

export default Cart