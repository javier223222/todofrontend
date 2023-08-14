import { Navigate,Outlet } from "react-router-dom";



const PrivateRouteLogin = () => {
 const isLogged=localStorage.getItem("acessToken")

  return isLogged ? <Navigate to={"/home"}></Navigate>:<Outlet></Outlet>
}



export default PrivateRouteLogin