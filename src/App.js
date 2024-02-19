import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store" 
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo"
import SearchVideos from "./components/SearchVideos";


const App=()=>{
    const appRouter=createBrowserRouter([{
        path:"/",
        element:<Body/>,
        children:[     
            {
                path:"/",
                element:<MainContainer/>,
            },
            {
                path:"/watch",
                element:<WatchVideo/>
            },
            // {
            //     path:"/searchvideos/1",
            //     element:<SearchVideos/>
            // },
           
        ],
    }])
    return <>
    <Provider store={store}>        
        <RouterProvider router={appRouter}/>    
    </Provider>
    </>
}

export default App;