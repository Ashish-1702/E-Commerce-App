import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import About from "./Components/About";
import ProductDetail from "./Components/ProductDetail";

const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
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
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/clothes/:id",
                element:<ProductDetail/>
            }

        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)