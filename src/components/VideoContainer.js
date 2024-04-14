import React, { useContext, useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_VIDEOS, YOUTUBE_VIDEOS_API } from '../utils/constants'
import Shimmer from './Shimmer'
import VideoCard from './VideoCard'
import { searchContext } from '../context/searchContext'


const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const contextState = useContext(searchContext);
  useEffect(() => {fetchVideos()}, [contextState.search]);

  const fetchVideos = async () => {
    if (contextState.search === "popular") {
      const videos = await fetch(YOUTUBE_VIDEOS_API)
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

  return (<div className='flex flex-wrap justify-center'>
    {
      videos.map(
      (video,index) =>
          <VideoCard videoDetails={video} key={index} />
      )
    }
  </div>)


}

export default VideoContainer