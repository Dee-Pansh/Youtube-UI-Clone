import { createSlice } from "@reduxjs/toolkit";

const myAppSlice=createSlice({
    name:"app",
    initialState:{
       isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state)=>{
         state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        }
    }
})
export const {toggleMenu,closeMenu}=myAppSlice.actions
export default myAppSlice.reducer