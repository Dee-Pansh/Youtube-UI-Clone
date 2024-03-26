import React from 'react'

const Button = ({name}) => {
  return (
    <button type='submit' className='bg-gray-300 rounded-lg mx-2 px-2 py-2'>{name}</button>
  )
}

export default Button