import { Navigate, Outlet } from "react-router-dom";
import store from "../utils/store";

const PrivateRoutes = () => {
  const isAuthenticated = store.getState().auth.isAuthenticated;
  const localStorageToken = localStorage.getItem('token');

  return (
    isAuthenticated || localStorageToken ? <Outlet/> : <Navigate to='/login'/>
  )
};

export default PrivateRoutes