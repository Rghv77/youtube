const VideoCard=({info})=>{
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet
    return <>
    <div className=" m-2 w-[24rem]  shadow-lg bg-slate-200 ">
        <img src={thumbnails.medium.url} className="rounded-lg w-full" alt="thumnail"/>
        <ul>
            <li className="font-bold py-2 overflow-hidden h-20">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li> 
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