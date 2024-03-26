import { configureStore } from "@reduxjs/toolkit"
import Slice from "./myAppSlice"
const store=configureStore({
    reducer:{
        app:Slice
    }
})
export default store