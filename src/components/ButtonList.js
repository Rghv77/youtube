import React from 'react'
import Button from './Button'

const Buttons=["All","Education","Technology","Jobs","Coding","Vlogs","Songs","Movies","Buisness","Motivation","Health","Comedy","Thriller","Horror"]
const ButtonList = () => {
  return (
    <div className='flex overflow-x-scroll  justify-between w-[97%]'>
      {
        Buttons.map((buttonname,index)=>{
          return <Button name={buttonname} key={buttonname}/>
        })
      }
    </div>
  )
}

export default ButtonList