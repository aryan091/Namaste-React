import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.card.info.id !== action.payload.card.info.id)
        },
        clearCart: (state) => {
            state.items = [] // Mutated the state
            //  return { items : []  } // Replace with new
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer