import React, { useContext, useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_VIDEOS, YOUTUBE_VIDEOS_API } from '../utils/constants'
import Shimmer from './Shimmer'
import VideoCard from './VideoCard'
import { searchContext } from '../context/searchContext'


const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const contextState = useContext(searchContext);
  const [maxResults,setMaxResults]=useState(20);
  useEffect(() => {fetchVideos();
  }, [contextState.search,maxResults]);

  const handleScroll=()=>{
    const scrollTop=document.documentElement.scrollTop;
    const clientHeight=document.documentElement.clientHeight;
    const scrollHeight=document.documentElement.scrollHeight;
    if (scrollTop + clientHeight >= scrollHeight)
    setMaxResults(maxResults+50);
  }

  const fetchVideos = async () => {
    if (contextState.search === "popular") {
      console.log("max results : ",maxResults);
      const videos = await fetch(YOUTUBE_VIDEOS_API+maxResults)
      const json = await videos.json();
      setVideos(json.items);
    }
    else {
      const videos = await fetch(YOUTUBE_SEARCH_VIDEOS + contextState.search);
      const json = await videos.json();
      setVideos(json.items);
    }
  }

 

console.log("videos loaded are : ",videos);

  if (videos.length === 0)
    return <Shimmer />

  return (<div className='flex flex-wrap justify-center border h-[80vh] overflow-y-scroll' onScroll={handleScroll}>
    {
      videos.map(
      (video,index) =>
          <VideoCard videoDetails={video} key={index} />
      )
    }
  </div>)


}

export default VideoContainer