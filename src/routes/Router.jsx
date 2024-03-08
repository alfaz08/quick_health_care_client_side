import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Pricing from "../pages/Blog/Pricing";





const router = createBrowserRouter([
  {
   path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <ErrorElement></ErrorElement>,
   children:[
    {
      path: "/home",
   element: <Home></Home>,
    },
    {
      path: "/blog",
   element: <Blog></Blog>
    },
    {
      path: "/pricing",
   element: <Pricing></Pricing>
    },
   
   ]
  },
   ]);

export default router;