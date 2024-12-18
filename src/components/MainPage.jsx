import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Weather from "./Weather";
import Privacy from "./Privacy";
import Footer from "./Footer";
function MainPage() {
  const router = createBrowserRouter([
    {
      path: "/WeatherApp",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>,
    },
    {
      path: "WeatherApp/weather",
      element: 
      <div>
        <Navbar/>
        <Weather/>
        <Footer/>
      </div>,
    },
    {
      path: "WeatherApp/privacy",
      element: 
      <div>
        <Navbar/>
        <Privacy/>
      </div>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default MainPage;
