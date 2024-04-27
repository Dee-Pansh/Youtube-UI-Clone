import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/myAppSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from "./CommentsContainer";
import LiveChat from './LiveChat';



const WatchPage = () => {

  const [searchParams] = useSearchParams()
  const id = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);



  return (
    <div className='flex flex-col mx-auto w-[90%]'>

      <div className='flex w-full'>

      <div className='flex justify-between'>
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

      <div className='w-full'>
        <LiveChat />
      </div>

      </div>
      <CommentsContainer />

    </div>
  )
}

export default WatchPage