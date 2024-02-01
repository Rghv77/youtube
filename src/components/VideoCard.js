const VideoCard=({info})=>{
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet
    return <>
    <div className="p-2 m-2 w-[16rem] shadow-lg ">
        <img src={thumbnails.medium.url} className="rounded-lg" alt="thumnail"/>
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
    <div className="p-1 m-1 border border-solid border-red-700">        
        <VideoCard info={info}/>
    </div>
    </>
}

export default VideoCard;