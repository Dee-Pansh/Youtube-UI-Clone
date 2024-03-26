import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/myAppSlice';
import { useSearchParams } from 'react-router-dom';
import Shimmer from "./Shimmer";
import { VIDEO_COMMENTS_API } from "../utils/constants";
import Comments from './Comments';

const WatchPage = () => {

  const [searchParams] = useSearchParams()
  const id = searchParams.get("v");
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(closeMenu());
    fetchComments();
  }, []);


  const fetchComments = async () => {
    const data = await fetch(VIDEO_COMMENTS_API + id);
    const json = await data.json();
    setComments(json.items);
  }

  return (
    <div className='flex flex-col ml-6'>
      <div>
        <iframe className='rounded-3xl'
          width="1000"
          height="550"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
        </iframe>
      </div>
        {
        comments.length === 0 
        ?
        <Shimmer /> 
        :
        <Comments comments={comments}/>
        }
    </div>
  )
}

export default WatchPage