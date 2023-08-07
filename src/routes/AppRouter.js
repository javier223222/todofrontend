import React from 'react'
import { Route, Routes } from 'react-router'
import PrivateRouteLogin from './PrivateRouteLogin'
import Login from '../pages/login/Login'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/home/Home'
import Register from '../pages/register/Register'


const AppRouter =() => {
  return (
    <Routes>
        <Route element={<PrivateRouteLogin></PrivateRouteLogin>}>
            <Route index Component={Login}></Route>
            <Route path='/register' Component={Register}></Route>
        </Route>
        <Route element={PrivateRoute}>
            <Route path='/home' Component={Home}></Route>
        </Route>

    </Routes>
  )
}



export default AppRouter