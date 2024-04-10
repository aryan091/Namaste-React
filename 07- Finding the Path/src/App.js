import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";

const AppLayout = () => {

    return (
            <div className="app">
                <Header />
                <Outlet />
            </div>
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
        ],
        errorElement: <Error />
    }
    ,
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={router} />);


