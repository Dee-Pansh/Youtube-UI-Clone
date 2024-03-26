import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const buttons=["All","Music","Sports","Entertainment","Education","Kapil Sharma","MS Dhoni"]
  return (
    <div className='flex'>
     {buttons.map((button,index)=><Button key={index} name={button}/>)}
    </div>
  )
}

export default ButtonList