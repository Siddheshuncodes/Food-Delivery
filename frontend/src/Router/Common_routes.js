import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";





const routes = createBrowserRouter([
    {
        path:'/',
        element:<Signup/>
    },
    {
        path:'/home',
        element:<Home/>
    }
])

function CommonRoutes() {
    return <RouterProvider router={routes} />
  }
  
  export default CommonRoutes;
  