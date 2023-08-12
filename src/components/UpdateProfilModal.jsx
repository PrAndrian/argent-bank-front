import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../utils/authSlice";
import { updateUserData } from "../service/requestApi";

const ModalUpdateProfil = () => {
    const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')

    const handleFirstNameChange = (e) => {
        e.preventDefault()
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        e.preventDefault()
        setLastName(e.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await updateUserData(token,userData,firstName,lastName)
        const updatedUserData = response.body;
        dispatch(setCredentials(updatedUserData))
        document.querySelector("#firstName").value = ''
        document.querySelector("#lastName").value = ''
        
    } 

  return (
    <div className="sign-in-content" style={{color:"black",}}>
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="firstName">First Name</label>
                <input 
                type="text" 
                id="firstName" 
                onChange={handleFirstNameChange}
                />
            </div>

          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              onChange={handleLastNameChange}
            />
          </div>

          <button 
            className="sign-in-button"
            type="submit"
          >
            Edit profil
          </button>
        </form>
    </div>
  )
}

export default ModalUpdateProfil