
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { useSelector } from "react-redux";

const sidebar_items=[
    {
    icon:<IoHomeOutline />,
    name:"Home",
},
    {
    icon:<SiYoutubeshorts />,
    name:"Shorts",
},
    {
    icon:<MdSubscriptions />,
    name:"Subscriptions",
},
    {
    icon:<FaHistory />,
    name:"History",
},
    {
    icon:<AiFillFire />,
    name:"Trending",
},
    {
    icon:<IoHomeOutline />,
    name:"Home",
},
    {
    icon:<SiYoutubeshorts />,
    name:"Shorts",
},
    {
    icon:<MdSubscriptions />,
    name:"Subscriptions",
},
    {
    icon:<FaHistory />,
    name:"History",
},
    {
    icon:<AiFillFire />,
    name:"Trending",
},
    {
    icon:<IoHomeOutline />,
    name:"Home",
},
    {
    icon:<SiYoutubeshorts />,
    name:"Shorts",
},
    {
    icon:<MdSubscriptions />,
    name:"Subscriptions",
},
    {
    icon:<FaHistory />,
    name:"History",
},
    {
    icon:<AiFillFire />,
    name:"Trending",
},
    {
    icon:<IoHomeOutline />,
    name:"Home",
},
    {
    icon:<SiYoutubeshorts />,
    name:"Shorts",
},
    {
    icon:<MdSubscriptions />,
    name:"Subscriptions",
},
    {
    icon:<FaHistory />,
    name:"History",
},
    {
    icon:<AiFillFire />,
    name:"Trending",
},
    {
    icon:<IoHomeOutline />,
    name:"Home",
},
    {
    icon:<SiYoutubeshorts />,
    name:"Shorts",
},
    {
    icon:<MdSubscriptions />,
    name:"Subscriptions",
},
    {
    icon:<FaHistory />,
    name:"History",
},
    {
    icon:<AiFillFire />,
    name:"Trending",
},
    {
    icon:<IoHomeOutline />,
    name:"Home",
},
    {
    icon:<SiYoutubeshorts />,
    name:"Shorts",
},
    {
    icon:<MdSubscriptions />,
    name:"Subscriptions",
},
    {
    icon:<FaHistory />,
    name:"History",
},
    {
    icon:<AiFillFire />,
    name:"Trending",
},
]
const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  return (
    
    <div className=' h-[83vh] overflow-y-scroll overflow-x-hidden'>
        {
            sidebar_items.map((item,index)=>{
             return  <div className='flex ml-4 items-center mb-4'>
                
                <div className='mr-8'>{item.icon}</div>
                {isMenuOpen&&<div className="w-[7rem]">{item.name}</div>}
                </div>
            })
        } 
    </div>
  )
}

export default Sidebar