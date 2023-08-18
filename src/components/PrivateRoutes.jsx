import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenthenticated);
  const localStorageToken = localStorage.getItem('token');

  return (
    isAuthenticated || localStorageToken ? <Outlet/> : <Navigate to='/login'/>
  )
};

export default PrivateRoutes