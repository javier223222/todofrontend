import React from 'react'
import { Navigate, Outlet } from 'react-router'



const PrivateRoute = ()=> {
    let isLogged=localStorage.getItem("acessToken")
   return !isLogged?<Navigate to={"/"}></Navigate>:<Outlet></Outlet>
}



export default PrivateRoute