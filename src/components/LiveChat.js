import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMessage, getRandomName } from '../utils/helper';
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {
  const dispatch=useDispatch();
  const ChatMessages=useSelector(store=>store.chat.messages);  
  useEffect(
    () => {
      const i = setInterval(() => {
        dispatch(addMessage(
          {
            name:getRandomName(),
            message:getRandomMessage()
          }))
      },500)
      return () => clearInterval(i)
    },[]
  );
  return (
    <div className='w-full flex p-2 h-[550px] border border-black rounded-lg bg-slate-100 ml-2 overflow-scroll flex-col-reverse'>
    {
    ChatMessages?.
       map
     (
        (chatMessage,index)=>
        <ChatMessage key={index} name={chatMessage?.name} message={chatMessage?.message} />
     )
    }
    </div>
  )
}
export default LiveChat