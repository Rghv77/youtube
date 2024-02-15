import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { chacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { logo, user_logo } from "../utils/constants";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";



const Header=()=>{

  const searchCache=useSelector((store)=>store.search);
    const dispatch=useDispatch();
    const [searchQuery,setSearchQuery]=useState("");
    const [searchSuggestions,setSearchSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);
    const getSearchSuggestions=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json=await data.json();        
        setSearchSuggestions(json[1]);
        dispatch(chacheResults({[searchQuery]:json[1]})); // perform lru
    
    }
    useEffect(()=>{     
        const time=setTimeout(()=>{
          if(searchCache[searchQuery]){
            setSearchSuggestions(searchCache[searchQuery])
          }
          else {
            getSearchSuggestions()
          }
          },200)         
        return ()=>{clearTimeout(time)};
        
    },[searchQuery])
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    return <>
    <div className="flex justify-between items-center bg-slate-300">
        <div className="flex items-center justify-between">
        <button  className="mx-4" onClick={toggleMenuHandler}> <GiHamburgerMenu /> </button>
        <img src={logo} alt="company_logo" className=" w-32 h-24"/>
        </div>
        <div className="">
            <input value={searchQuery} className=" border-2 border-slate-500 rounded-l-full w-[40vw] h-10 outline-none" placeholder="Search your videos" onChange={(e)=>{setSearchQuery(e.target.value)}}
            onFocus={()=>{setShowSuggestions(true)}}
            onBlur={()=>{setShowSuggestions(false)}}/>
            <button className="bg-slate-500 rounded-r-full h-10 w-20">
            🔍
          </button> 
          {showSuggestions && searchSuggestions?.length>0&& (
          <div className="fixed bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100">
            <div>
              {searchSuggestions?.map((s,index) => 
                 { return <Link to={`/searchvideos/${encodeURIComponent(s)}`} key={index}>
                <div className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </div>
                </Link>}
               
              )}
            </div>
          </div>
        )}
        </div>
        <div className="flex justify-between items-center">
        <IoNotificationsOutline size={25} />
        <MdOutlineVideoCall className="ml-4" size={25} />
        <img src={user_logo} alt="user_logo" className="w-10 h-10 mx-4"/>
        </div>

    </div>
    </>
}

export default Header;