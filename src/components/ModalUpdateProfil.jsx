import { useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../utils/authSlice";

const ModalUpdateProfil = ({userData}) => {
    const token = useSelector((state) => state.auth.token);
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
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            body: JSON.stringify({
                firstName : firstName.length === 0 ? userData.firstName : firstName,
                lastName : lastName.length === 0 ? userData.lastName : lastName,
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          dispatch(setCredentials(data.body))
            document.querySelector("#firstName").value = ''
            document.querySelector("#lastName").value = ''
        }
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

ModalUpdateProfil.propTypes ={
    token: PropTypes.string,
    userData: PropTypes.objectOf(PropTypes.string)
};

export default ModalUpdateProfil