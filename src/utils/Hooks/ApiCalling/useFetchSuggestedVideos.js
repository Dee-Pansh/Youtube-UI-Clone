// import { useEffect, useState } from 'react'
// import { SUGGESTED_VIDEOS_API } from '../constants';

// const useFetchSuggestedVideos = (videoId) => {
//   const [suggestedVideos,setSuggestedVideos]=useState([]);
 
//   useEffect(()=>{fetchSuggestedVideos()},[]);

//   const fetchSuggestedVideos=async()=>{
//     const data=await fetch(SUGGESTED_VIDEOS_API+videoId);
//     const json=await data.json();
//     console.log("suggested videos : ",json);
//     setSuggestedVideos(json);
//   }

//   return suggestedVideos;

// }

// export default useFetchSuggestedVideos