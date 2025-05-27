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
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PlatformTermsOfUse from "./components/PlatformTerm";
import FeePolicy from "./components/FeePolicy";

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
    path: "/term&condition",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
       
        <TermsAndConditions/>
      </Suspense>
    ),
  },
  {
    path: "/privacy&policy",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <PrivacyPolicy/>
       
        
      </Suspense>
    ),
  },
  {
    path: "/platformTerm",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <PlatformTermsOfUse/>
       
        
      </Suspense>
    ),
  },
  {
    path: "/guestPolicy",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
      <FeePolicy/>
       
        
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
    path: "/privacypolicy",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <NotificationBar/>
        <NavigationBar/>
        <PrivacyPolicy/>
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
