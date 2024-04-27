import { configureStore } from "@reduxjs/toolkit"
import Slice from "./myAppSlice"
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"
const store = configureStore({
    reducer: {
        app: Slice,
        search:searchSlice,
        chat:chatSlice
    }
})
export default store