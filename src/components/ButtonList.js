import React from 'react'
const Buttons=["All","Education","Technology","Jobs","Coding","Vlogs","Songs","Movies","Buisness","Motivation","Health"]
const ButtonList = () => {
  return (
    <div>
      {
        Buttons.map((buttonname,index)=>{
          return <button className='bg-slate-300 rounded-lg h-10 w-24 mr-2 font-bold'>{buttonname}</button>
        })
      }
    </div>
  )
}

export default ButtonList