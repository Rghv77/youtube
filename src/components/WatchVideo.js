import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const WatchVideo=()=>{
    const [searchParams]=useSearchParams();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    return <>
    <div>
     <div className="px-5">
    <iframe width="800" height="500" className="rounded-lg" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <CommentsContainer/>
    </div>
    </>
}

export default WatchVideo;