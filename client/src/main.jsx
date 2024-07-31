import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import "./index.css";
// import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Art from "./pages/Art";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tworczosc",
        element: <Art />,
      },
      {
        path: "/o-mnie",
        element: <About />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <Home />,
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <Navbar />
//       <Home />
//     </RouterProvider>
//   </React.StrictMode>
// );
