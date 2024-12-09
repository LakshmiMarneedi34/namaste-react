import React from "react" //coming from nodemodules we have package react
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"

//React.createElement return object when we render this on to the dom then it becomes a HTML Element
//JSX => React.CreateElement => returns JS Object => HTMLElement(render) --->Babel is converting elemnets into regular js

const App = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
        
            },
            {
                path:"/contact-us",
                element:<ContactUs/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    // {
    //     path:"/about",
    //     element:<About/>

    // },
    // {
    //     path:"/contact-us",
    //     element:<ContactUs/>
    // }
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)