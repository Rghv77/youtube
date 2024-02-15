import { useDispatch } from "react-redux";

import { toggleButton } from "../utils/appSlice";
import { searchHandler } from "../utils/constants";


const Button = ({ name }) => {
  const dispatch=useDispatch();
  const handleButtonclick=async(name)=>{
    dispatch(toggleButton(name));
    const API=searchHandler(name);
    const data=await fetch(API);
    const json=await data.json();
    console.log(json);
  }
  return (
    <div>
    <button className="px-5 py-2 mx-2 bg-gray-200 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-yellow-500 " onClick={()=>{handleButtonclick(name)}}>{name}</button>
    </div>
  );
};

export default Button;
