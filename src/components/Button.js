import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "../utils/appSlice";
import { searchHandler } from "../utils/constants";
import { useState } from "react";

const Button = ({ name }) => {
  const theme=useSelector((store)=>store.app.Theme);
  const buttonname=useSelector((store)=>store.app.ButtonName);
  const dispatch=useDispatch(); 
   console.log(buttonname);
   
  const handleButtonClicked=(name)=>{
    dispatch(toggleButton(name));    
  }
  return (
    <div>
    <button className={"px-5 py-2 m-2 rounded-lg font-semibold "+(buttonname===name?"bg-red-700 text-white":"bg-slate-300")} onClick={()=>handleButtonClicked(name)}>{name}</button>
    </div>
  );
};

export default Button;
