import { configureStore } from "@reduxjs/toolkit"
import Slice from "./myAppSlice"
import searchSlice from "./searchSlice"
const store = configureStore({
    reducer: {
        app: Slice,
        search:searchSlice
    }
})
export default store