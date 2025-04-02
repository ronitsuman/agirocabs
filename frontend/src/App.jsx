import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
