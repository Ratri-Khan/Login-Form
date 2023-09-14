import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthProviders from './providers/AuthProviders';
import Orders from './components/orders/Orders';
import Home from './components/home/Home';
import PrivateRoute from './routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
    {
      path:"/",
      element:<Home></Home>
    }, 
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/orders",
      element:<PrivateRoute><Orders></Orders></PrivateRoute>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
     <AuthProviders>
      <RouterProvider router={router} />
     </AuthProviders>
  
)
