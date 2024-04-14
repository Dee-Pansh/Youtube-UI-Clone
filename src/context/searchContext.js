import { createContext, useState } from "react";

export const searchContext=createContext("popular");

export const SearchContextProvider=(props)=>{
    const [search,setSearch]=useState("popular");
    return (
        <searchContext.Provider value={{search,setSearch}}>
            {props.children}
        </searchContext.Provider>
    )
}