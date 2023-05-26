import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import NotFound from "../notfound-404/NotFound";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";
import AllToys from "../components/alltoys/AllToys";
import AddToy from "../components/addAToy/AddToy";

import SingleToyDetails from "../components/singleToyDetails/SingleToyDetails";
import PrivateRoute from "./PrivateRoute";
import MyToy from "../components/mytoy/MyToy";
// import UpdateToy from "../components/updateToy/UpdateToy";
import Blog from "../components/blog/Blog";





  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path:'/mytoy',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
      {
        path:'/addtoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      // {
      //   path:'/updatetoy',
      //   element: <UpdateToy></UpdateToy>,
      //   // loader: (params)=> fetch(`https://robo-kit-toy-server-aalnoman2042.vercel.app/update/${params.id}`)

      // },
      {
        path:'/singletoy/:id',
        element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://robo-kit-toy-server-aalnoman2042.vercel.app/singletoy/${params.id}`)
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      }
   
      ]
    },
    {
        path:'*',
        element: <NotFound></NotFound>
      }
  ]);

  export default router