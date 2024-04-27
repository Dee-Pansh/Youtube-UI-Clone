import React from 'react'

const ChatMessage = ({ name, message }) => 
{
    return (
        <div className='flex shadow-lg w-full items-center p-2'>
            <img alt='user' className='w-12 h-12' src="https://cdn-icons-png.freepik.com/256/1077/1077114.png" />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage

