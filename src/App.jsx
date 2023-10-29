import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Auth from "./auth/Auth";
import "./index.css";

function App() {
    const router = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/auth", element: <Auth /> },
      ]);
    
      return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;