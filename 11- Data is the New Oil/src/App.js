import React , { lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./context/UserContext";


const Grocery = lazy( () => import("./components/Grocery") )
const AppLayout = () => {

    const [ userInfo , setUserInfo] = useState()

    // Authentication
    useEffect(() => {
        // API Call
        const data = {
            name: "Aryan"
        }

        setUserInfo(data.name)
    })

    return (
            <UserContext.Provider value={{loggedInUser : userInfo}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
            </UserContext.Provider>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />
            }
            ,
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />
            }
            ,
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />
            }
            ,
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
                errorElement: <Error />

            }
            ,
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}>
                    <Grocery />,
                </Suspense>,
                errorElement: <Error />
            }
        ],
        errorElement: <Error />
    }
    ,
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={router} />);


