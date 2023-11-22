import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import AddOng from "./routes/AddOng.jsx";
import FormNewInst from "./routes/FormNewInst.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/AddOng",
                element: <AddOng />,
            },
            {
                path: "/FormNewInst",
                element: <FormNewInst />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
