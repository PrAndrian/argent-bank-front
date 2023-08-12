import { Navigate } from "react-router-dom";
import SignInModal from "../components/SignInModal";
import { useSelector } from "react-redux";

const Login = () => {
  const token = useSelector((state)=>state.auth.token);
  if(token){return <Navigate to='/profile'/>}

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        
        <SignInModal/>
      </section>
    </main>
  )
}

export default Login