import React from 'react'
import Comment from './Comment'
const Comments = ({ comments }) => {
  return (
    <div className='mt-9'>
      <h2 className='font-bold mb-4'>{comments.length} Comments</h2>
      {comments.map(comment=><Comment comment={comment}/>)}
    </div>
  )
}

export default Comments