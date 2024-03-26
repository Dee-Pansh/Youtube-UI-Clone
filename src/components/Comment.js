import React from 'react'
import useFetchComment from '../utils/Hooks/useFetchComment'
import useCalculateTime from "../utils/Hooks/useCalculateTime";


const Comment = ({ comment }) => {
  const Comment = useFetchComment(comment.id);
  const {textOriginal,authorProfileImageUrl,authorDisplayName,publishedAt,updatedAt,likeCount}=Comment;

  return (
    <div className=' flex justify-between my-5 w-[45%] border-b-2'>
      <img src={authorProfileImageUrl} className='w-[6%] rounded-full h-[40px] ' alt="author display name"/>
      <div className='flex flex-col w-[90%]'>
        <div className='flex justify-between w-[70%]'>
          <span className='font-bold'>{authorDisplayName} </span>
          <span className='text-gray-500'>{useCalculateTime(publishedAt)}</span>
        </div>
        <p className='font-serif'>{textOriginal}</p>
      </div>
    </div>
  )
}

export default Comment