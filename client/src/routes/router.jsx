import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoute from "./privetRoute";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import UpdateMyToy from "../pages/MyToys/UpdateMyToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
                loader: () => fetch(`https://b7a11-toy-marketplace-server-side-robiuzzaman4.vercel.app/allToys`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/myToys",
                element: <PrivetRoute><MyToys></MyToys></PrivetRoute>,
            },
            {
                path: "/addAToy",
                element: <PrivetRoute><AddAToy></AddAToy></PrivetRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/toys/:id",
                element: <PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-robiuzzaman4.vercel.app/toys/${params.id}`)
            },
            {
                path: "/myToys/:id",
                element: <UpdateMyToy></UpdateMyToy>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-robiuzzaman4.vercel.app/myToys/${params.id}`)
            }
        ]
    }
]);

export default router;