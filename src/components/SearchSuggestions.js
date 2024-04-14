import { useContext } from "react";
import { searchContext } from "../context/searchContext";

const SearchSuggestions=({suggestions,setShowSuggestions})=>{
   const contextState=useContext(searchContext);
   const handleClick=(event)=>{
      setShowSuggestions(false)
      contextState.setSearch(event.target.id)
   }
   return (
    <div className="absolute top-10 border-2 w-[35vw] text-lg rounded-lg bg-white">
     {suggestions.map((suggestion,index)=>
     <p className="hover:bg-gray-200" key={index} id={suggestion} onClick={handleClick}>🔍{suggestion}</p>
     )}
    </div>
   )
}
export default SearchSuggestions;