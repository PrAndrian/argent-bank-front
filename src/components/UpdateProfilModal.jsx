import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../utils/authSlice";
import { updateUserData } from "../service/requestApi";
import { setVisibility } from "../utils/editingFormSlice";

const ModalUpdateProfil = () => {
    const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.auth.userData);
    const showModalEdit = useSelector((state) => state.editingForm.visible);
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName)

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

        const regex = /[!@#$%^&*()_+{}\\[\]:;<>,.?~\\|]/;
        if(regex.test(firstName) || regex.test(lastName)){
          document.querySelector('.error-message').style.display = "inline-block";  
          document.querySelector('.error-message').innerHTML = "Please do not use special characters in your names";  
          return;
        }

        if(firstName.length === 0 || lastName.length === 0){
          document.querySelector('.error-message').style.display = "inline-block";  
          document.querySelector('.error-message').innerHTML = "Your fristName or lastName should not be empty fields";  
          return;
        }
        
        const response = await updateUserData(
          token,
          userData,
          firstName.replace(/\s+/g, ' '),
          lastName.replace(/\s+/g, ' ')
        )
        const updatedUserData = response.body;
        dispatch(setCredentials(updatedUserData))
        dispatch(setVisibility(!showModalEdit));
    } 

    const handleClick = (event) =>{
      event.preventDefault(); 
      dispatch(setVisibility(!showModalEdit))
    }

  return (
    <div className="edit-content" style={{color:"black",}}>
        <span className="error-message"></span>
        <form className="form" onSubmit={handleSubmit}>
          <div className="container-input" >
            <div className="input-wrapper-edit" >
                <input 
                  type="text" 
                  id="firstName" 
                  onChange={handleFirstNameChange}
                  value={firstName}
                />
            </div>

            <div className="input-wrapper-edit">
              <input 
                type="text" 
                id="lastName" 
                onChange={handleLastNameChange}
                value={lastName}
              />
            </div>
          </div>

          <div className="container-button">
          <button 
            className="sign-in-button"
            type="submit"
          >
            Save
          </button>

          <button 
            className="sign-in-button"
            onClick={handleClick}
          >
            Cancel
          </button>
          </div>
        </form>
    </div>
  )
}

export default ModalUpdateProfil