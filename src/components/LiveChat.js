import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat=()=>{
    const [liveMessage,setLiveMessage]=useState("");
    const chat=useSelector((store)=>store.chat.message)
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
    const dispatch=useDispatch();
    useEffect(()=>{
        const i=setInterval(()=>{
            dispatch(addMessage({name:generateRandomName(),message:generateRandomMessage(7)}))
        },1500)

        return ()=>clearInterval(i);
    },[])
    return <>
    <div className={" h-[500px] ml-2 p-2 border border-black bg-slate-100  rounded-lg overflow-y-scroll flex flex-col-reverse "+(isMenuOpen?" ml-16 w-[80%]":"w-full")}>
        {
            chat?.map((message)=>{
                return <ChatMessage name={message.name} message={message.message}/>
            })}
    </div>
    <form
        className={"w-full p-2 ml-2 border rounded-lg border-black "+(isMenuOpen?" ml-16 w-[80%]":"w-full")}
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Harsh Raghav",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-full border border-slate-400 outline-none mb-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
}

export default LiveChat;