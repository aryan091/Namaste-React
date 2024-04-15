import React from "react";
import { CDN_URL } from "../utils/constants";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";


const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    // Dispatch an action to add item to cart
    dispatch(addToCart(item));
  }

  return (
    <div>
      {items.map((item , isCart) => (
        <div
          key={item.card.info.id}
          className="p-2 my-2 border-b-2 border-gray-200 "
        >
          <div className="flex  justify-between">
            <div className="mb-1 w-9/12">
              <div className="font-bold text-gray-600 text-left">
                {item.card.info.name}
              </div>

              <div className="text-gray-600 text-sm text-left mb-2">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <p className="text-gray-600 text-sm text-left">
                {item.card.info.description}
              </p>
            </div>

            <div className="relative w-3/12 h-36 m-2 p-2">
              {item.card.info.imageId ? (
                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt="No Image Data"
                  className="object-cover w-full h-full shadow-lg rounded-lg"
                />
              ) : (
                <div className="flex items-center justify-center bg-gray-200 w-full h-full shadow-lg rounded-lg">
                  No Image
                </div>
              )}
              { item.card.info.imageId && (
                <button className="absolute top-[120] right-[28] bg-white px-4 py-1 rounded-md text-green-600 font-bold w-[110] shadow-lg hover:bg-gray-200" onClick={() =>handleAddToCart(item)}>
                  ADD
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
