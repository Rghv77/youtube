import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API, searchHandler } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { AdVideoCard } from "./VideoCard";
import {  useSelector } from "react-redux";



const VideoContainer=()=>{
    const buttonname=useSelector((store)=>store.app.ButtonName);
    const [videos,setVideos]=useState([]);
    const getVideos=async()=>{ 
        
        const data=await fetch(YOUTUBE_VIDEOS_API);
        const json=await data.json();   
        console.log("home",buttonname);
        console.log(json);
        setVideos(json.items); // i m using state instead of redux redux bcoz i want to fetch the data every times the after every initial render of component 
    }
    
 
    const getsearchVideos=async()=>{
        const API=searchHandler(buttonname);
        const data=await fetch(API);
        const json=await data.json();
        console.log("search",buttonname);
        console.log(json);
        setVideos(json.items);
    }
    
    useEffect(()=>{
        console.log("Hello");
         getsearchVideos();
        
    },[buttonname])
    return <>
     <div className="grid grid-cols-3 gap-3 overflow-y-scroll h-[77vh] mt-2">
        {/* {videos&&videos[0]&&<AdVideoCard info={videos[0]}/>} */}
        {videos?.map((video)=>{
            return <Link to={"/watch?v="+video.id} key={video.id}> <VideoCard info={video}/></Link>
        })}
        {videos&&videos[0]&&<AdVideoCard info={videos[0]}/>}
     </div>
    </>
}

export default VideoContainer;