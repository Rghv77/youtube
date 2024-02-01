import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store" 
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo"

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
            }
        ],
    }])
    return <>
    <Provider store={store}>
        <div>
    <Header/>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
    </>
}

export default App;