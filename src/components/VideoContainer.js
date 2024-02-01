import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { AdVideoCard } from "./VideoCard";

const VideoContainer=()=>{
    const [videos,setVideos]=useState([])
    const getVideos=async()=>{ 
        
        const data=await fetch(YOUTUBE_VIDEOS_API);
        const json=await data.json(); 
    
        setVideos(json.items); // i m using state instead of redux redux bcoz i want to fetch the data every times the after every initial render of component 
    }
    
    useEffect(()=>{
        getVideos();
    },[])
    return <>
     <div className="flex flex-wrap">
        {videos&&videos[0]&&<AdVideoCard info={videos[0]}/>}
        {videos.map((video)=>{
            return <Link to={"/watch?v="+video.id} key={video.id}> <VideoCard info={video}/></Link>
        })}
     </div>
    </>
}

export default VideoContainer;