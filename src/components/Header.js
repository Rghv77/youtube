import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleTheme } from "../utils/appSlice";
import { chacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { logo, user_logo } from "../utils/constants";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";




const Header=()=>{
  const theme=useSelector((store)=>store.app.Theme);
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
    <div className={"flex justify-between items-center  h-[5rem]"}>
        <div className="flex items-center justify-between">
        <button  className={"mx-4"+(!theme?" text-white":" text-black")} onClick={toggleMenuHandler}> <GiHamburgerMenu /> </button>
        <Link to="/"> <button className=" w-32  font-bold font-serif text-red-700 text-3xl shadow-sm shadow-black bg-gradient-to-tr from bg-yellow-200 rounded-md ml-4 ">AllTube</button></Link>
        {/* <img src={logo} alt="company_logo" className=" w-32 h-24"/> */}
        
        </div>
        <div className="">
            <input value={searchQuery} className=" border border-slate-500 rounded-l-full w-[40vw] h-10 outline-none" placeholder="Search your videos" onChange={(e)=>{setSearchQuery(e.target.value)}}
            onFocus={()=>{setShowSuggestions(true)}}
            onBlur={()=>{setShowSuggestions(false)}}/>
            <button className="border border-slate-500 bg-slate-200 rounded-r-full h-10 w-16">
            🔍
          </button> 
          {showSuggestions && searchSuggestions?.length>0&& (
          <div className="fixed bg-white py-2 px-2 w-[40vw] shadow-lg rounded-lg border border-gray-100">
            <div>
              {searchSuggestions?.map((s,index) => 
                 { return <Link to={`/searchvideos/`+index} key={index}>
                <div className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </div>
                </Link>}
               
              )}
            </div>
          </div>
        )}
        </div>
        <div className={"flex justify-between items-center"+(!theme?" text-white":" text-black")}>
        
        {theme?<MdNightlight size={25} className="mr-8 cursor-pointer" onClick={()=>{dispatch(toggleTheme())}} />:<MdOutlineLightMode size={25} className="mr-8 cursor-pointer" onClick={()=>{dispatch(toggleTheme())}}/>}

          
        <IoNotificationsOutline size={25} />
        <MdOutlineVideoCall className="ml-4" size={25} />
        <FaRegUserCircle className="mx-4" size={30} />

        </div>

    </div>
    </>
}

export default Header;