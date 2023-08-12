import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../utils/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const token = useSelector((state)=>state.auth.token);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    const handleUsernameChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        completed: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    
    if (response.ok) {
      const data = await response.json();
      const token = data.body.token;
      dispatch(login({token}));
      navigate('/profile', {replace: true});
    }
  };

  if(token){return <Navigate to='/profile'/>}

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              id="email" 
              onChange={handleUsernameChange}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              onChange={handlePasswordChange}
            />
          </div>

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button 
            className="sign-in-button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login