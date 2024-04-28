import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMessage, getRandomName } from '../utils/helper';
import { addMessage } from '../utils/chatSlice';
import chatSendSymbol from "../utils/Images/chatSendSymbol.svg";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector(store => store.chat.messages);


  useEffect(
    () => {
      const i = setInterval(() => {
        dispatch(addMessage(
          {
            name: getRandomName(),
            message: getRandomMessage()
          }))
      }, 1000)
      return () => clearInterval(i)
    }, []
  );


  const handleOnChange = (event) => {
    event.preventDefault();
    setLiveMessage(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage({
      name:"Deepansh Johri",
      message:liveMessage
    }));
    setLiveMessage("");
  }

  return (
    <>
      <div className='w-full flex p-2 h-[550px] border border-black rounded-lg bg-slate-100 ml-2 overflow-scroll flex-col-reverse'>
        {
          ChatMessages?.
            map
            (
              (chatMessage, index) =>
                <ChatMessage key={index} name={chatMessage?.name} message={chatMessage?.message} />
            )
        }
      </div>
      <form className='w-full mt-2 ml-2 flex items-center justify-evenly'>
          <input type="text" className='outline-none  w-3/4 border border-black rounded-lg' name="chat" id="" placeholder='Enter your message' value={liveMessage} onChange={(event) => { handleOnChange(event) }} />
          <button type="submit" onClick={handleOnSubmit}>
            <img src={chatSendSymbol} alt='chat symbol' className='h-6 w-6' /></button>
      </form>
    </>
  )
}
export default LiveChat