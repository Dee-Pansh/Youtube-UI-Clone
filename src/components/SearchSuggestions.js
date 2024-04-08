const SearchSuggestions=({suggestions})=>{
   return (
    <div className="absolute top-10 border-2 w-[35vw] text-lg rounded-lg bg-white">
     {suggestions.map((suggestion,index)=>
     <p className="hover:bg-gray-200" key={index}>🔍{suggestion}</p>
     )}
    </div>
   )
}
export default SearchSuggestions;