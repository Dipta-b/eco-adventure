import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdventureExperience from "../pages/AdventureExperience";
import AdventureDetails from "../pages/AdventureDetails";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {

            }
        ]
    },

    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
            {
                path: "/auth/adventure/:id",
                element: <PrivateRoutes><AdventureDetails></AdventureDetails></PrivateRoutes>,
                loader: async ({ params }) => {
                    const response = await fetch("/public/adventure.json");
                    const data = await response.json();
                    const adventure = data.find(item => item.id == params.id);
                    return adventure;
                }
            },
        ]
    },

    {
        path: "*",
        element: <h1>Error</h1>,
    },
])

export default router;