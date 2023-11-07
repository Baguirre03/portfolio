import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Photos from "./components/Photos";
import App from "./App";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App></App> },
    {
      path: "photography",
      element: <Photos></Photos>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
