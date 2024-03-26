import React from "react"
const card=[]
for(let i=1;i<=20;i++)
card.push(
<div className="p-3 pl-0 w-60 m-2 ml-0 h-52 flex flex-col justify-evenly">
  <div className="w-[90%] mx-auto bg-gray-300 rounded-lg h-[70%]"></div>
  <div className="w-[90%] mx-auto bg-gray-300 rounded-lg h-[20%]"></div>
</div>)
const Shimmer = () => 
{
  return (
    <div className='flex flex-wrap justify-center'>
      {card}
    </div>
  )
}

export default Shimmer