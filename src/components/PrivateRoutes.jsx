import { Navigate, Outlet } from "react-router-dom";
import store from "../utils/store";

const PrivateRoutes = () => {
  const isAuthenticated = store.getState().auth.isAuthenticated;
  return (
    isAuthenticated ? <Outlet/> : <Navigate to='/sign-in'/>
  )
};

export default PrivateRoutes