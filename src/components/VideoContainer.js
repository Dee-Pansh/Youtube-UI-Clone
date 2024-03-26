import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import Shimmer from './Shimmer'
import VideoCard from './VideoCard'


const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  useEffect(()=>fetchVideos, []);

  const fetchVideos = async () => {
    const videos = await fetch(YOUTUBE_VIDEOS_API)
    const json = await videos.json()
    console.log(json);
    setVideos(json.items);
  }

  if(videos.length === 0)
    return <Shimmer />

  return <div className='flex flex-wrap justify-center'>{videos.map(video =><VideoCard videoDetails={video} key={video?.id} />)}</div>


}

export default VideoContainer