import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'
import { useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice";
const Cart = () => {

    // Subscribing to the store using useSelector
  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch();
  

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='text-center p-4 m-4 '>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <div className='text-center m-4 p-4'>
        {cartItems?.length === 0 && (
          <h1 className='text-lg font-bold text-gray-500'> Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems}  />
        </div>
       
      </div>
    </div>
  )
}

export default Cart