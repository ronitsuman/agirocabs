import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cars from "./Pages/Cars";
import Booking from "./Pages/Booking";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import NotificationBar from "./components/NotificationBar";
import NavigationBar from "./components/NavigationBar";
import 'react-toastify/ReactToastify.css'
import {ToastContainer} from "react-toastify"

// Lazy Load Components
const Home = lazy(() => import("./Pages/Home"));


// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/cars",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <NotificationBar/>
        <NavigationBar/>
        <Cars/>
      </Suspense>
    ),
  },
  {
    path: "/booking",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <NotificationBar/>
        <NavigationBar/>
        <Booking/>
      </Suspense>
    ),
  },
  {
    path: "/aboutus",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <NotificationBar/>
        <NavigationBar/>
        <AboutUs/>
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <NotificationBar/>
        <NavigationBar/>
        <Contact/>
      </Suspense>
    ),
  },
  // {
  //   path: "/register",
  //   element: (
  //     <Suspense fallback={<h2>Loading...</h2>}>
  //       <NotificationBar/>
  //       <NavigationBar/>
  //       <Register/>
  //     </Suspense>
  //   ),
  // }
  
]);

const App = () => {
  return (
    <>
        <ToastContainer
        position="top-right"       
        autoClose={3000}           
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"            
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
