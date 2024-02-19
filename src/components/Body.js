import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Header from "./Header";
import { useSelector } from "react-redux";

const Body=()=>{
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
    return <>
    <Header/>
    <div className="grid grid-cols-12 mt-2">
        <div className={!isMenuOpen?"col-span-1":"col-span-2"}>
    <Sidebar/>
    </div>
    <div className={!isMenuOpen?"col-span-11":"col-span-10"}>
    <Outlet/>
    </div>
    </div>     
    </> 
}
export default Body;