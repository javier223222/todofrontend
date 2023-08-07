import { Navigate,Outlet } from "react-router";
import React from 'react'


const PrivateRouteLogin = props => {
 const isLogged=localStorage.getItem("acessToken")

  return isLogged ? <Navigate to={"/home"}></Navigate>:<Outlet></Outlet>
}



export default PrivateRouteLogin