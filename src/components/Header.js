import { useEffect, useState } from "react";
import { Hamburger_icon, YOUTUBE_SEARCH_API, website_logo } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { chacheResults } from "../utils/searchSlice";


const Header=()=>{
  const searchCache=useSelector((store)=>store.search);
    const dispatch=useDispatch();
    const [searchQuery,setSearchQuery]=useState("");
    const [searchSuggestions,setSearchSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(true);
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
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className=" flex col-span-1">
        <img src={Hamburger_icon} alt="menu" className="h-8 rounded-full cursor-pointer" onClick={toggleMenuHandler}/>
        <img src={website_logo} alt="logo" className="h-8 mx-2"/>
        </div>
        <div className="col-span-10 px-10">
            <input value={searchQuery} placeholder="Search your videos" onChange={(e)=>{setSearchQuery(e.target.value)}}
            onFocus={()=>{setShowSuggestions(true)}}
            onBlur={()=>{setShowSuggestions(false)}}
             className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"/>
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button> 
          {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {searchSuggestions?.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
        <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>

    </div>
    </>
}

export default Header;