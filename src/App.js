import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContex";
import { useState ,useEffect} from "react";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";


const root=ReactDOM.createRoot(document.getElementById("root"));
const Grocery =lazy(()=>import("./components/Grocery"));


const Applayout=()=>{
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
      // Make an API call and send username and password
      const data = {
        name: "default",
      };
      setUserName(data.name);
    }, []);
  
    return (
        <Provider store={appStore}>
        <userContext.Provider value={{ loggedInUser:userName,setUserName  }}>
        <div className="app bg-red-100">
           
            <Header />
            <Outlet />
           
             
        </div>
        
        </userContext.Provider>
        </Provider>
    );
}
const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
        ],
        errorElement:<Error/>
    }
   
    
]);
root.render(<RouterProvider router={approuter}/>)

