import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/authSlice";
import { signIn } from "../service/requestApi";

const SignInModal = () => {
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
        document.querySelector('#loginFrom').setAttribute("data-error", "");  
        const token = await signIn(email,password);
        if(token){
            dispatch(login({token}));
            navigate('/profile', {replace: true});  
        }else{
            document.querySelector('#loginFrom').setAttribute("data-error", 
            `Please check you email adress or your password`);  
        }
    };

    return (
        <form id="loginFrom" onSubmit={handleSubmit} data-error="">
            <div className="input-wrapper">
                <label htmlFor="email" >Email</label>
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
    )
}

export default SignInModal