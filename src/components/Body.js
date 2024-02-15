import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Header from "./Header";

const Body=()=>{
    return <>
    <Header/>
    <div className="flex mt-2">
    <Sidebar/>
    <Outlet/>
    </div>     
    </> 
}
export default Body;