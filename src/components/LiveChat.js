import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat=()=>{
    const chat=useSelector((store)=>store.chat.message)
    const dispatch=useDispatch();
    useEffect(()=>{
        const i=setInterval(()=>{
            // dispatch(addMessage({name:"harsh",message:"Helllo i am hrs"}))
        },2000)

        return ()=>clearInterval(i);
    },[])
    return <>
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100  rounded-lg overflow-y-scroll">
        {
            chat?.map((message)=>{
                return <ChatMessage name={message.name} message={message.message}/>
            })}
    </div>
    </>
}

export default LiveChat;