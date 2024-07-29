import { configureStore } from "@reduxjs/toolkit";
import appSLice from "../slice/appSlice"; 
import searchSlice from "../slice/searchSlice";
const store = configureStore({

    reducer: {
        app : appSLice,
        search : searchSlice
    }
})

export default store