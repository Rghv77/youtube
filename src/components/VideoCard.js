import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useSelector } from "react-redux";

const VideoCard=({info})=>{
    const theme=useSelector((store)=>store.app.Theme);

    const buttonname=useSelector((store)=>store.app.ButtonName);
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
    const [yticon,setyticon]=useState("");
    const {snippet}=info;
    const {channelTitle,title,thumbnails,channelId}=snippet;
    const getChannelDetail=async()=>{
        const data=await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+channelId+"&key="+GOOGLE_API_KEY);
        const json=await data.json();
        setyticon(json.items[0].snippet.thumbnails.high.url)
    }
    useEffect(()=>{
        console.log("icon");
        getChannelDetail();
    },[buttonname])
    return <>
    <div className={"mt-8 mb-4 "+(!isMenuOpen?"w-[24rem]":"w-[21rem]")}>
        <img src={thumbnails.medium.url} className="rounded-lg w-full" alt="thumbnail"/>
        <ul class={(!theme?" text-white":" text-black")}>
            <li className="font-bold overflow-hidden flex mt-1"><img src={thumbnails.high.url} alt="user_logo" className="w-10 h-10 mr-4 rounded-full"/><div>{title}</div></li>
            <li>{channelTitle}</li> 
        </ul>        
    </div>
    </>
}

export const AdVideoCard=({info})=>{
    return <>
    <div className="p-1 m-1 border bg-yellow-500 border-solid border-red-700">        
        <VideoCard info={info}/>
    </div>
    </>
}

export default VideoCard;