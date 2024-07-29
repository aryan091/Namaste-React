import { configureStore } from "@reduxjs/toolkit";
import appSLice from "../slice/appSlice"; 
import searchSlice from "../slice/searchSlice";
import chatSlice from "../slice/chatSlice";
const store = configureStore({

    reducer: {
        app : appSLice,
        search : searchSlice,
        chat: chatSlice,

    }
})

export default store