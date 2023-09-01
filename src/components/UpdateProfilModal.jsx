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
        const response = await updateUserData(token,userData,firstName,lastName)
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
        <form className="form" onSubmit={handleSubmit}>
          <div className="container-input">
            <div className="input-wrapper-edit">
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  onChange={handleFirstNameChange}
                  value={firstName}
                />
            </div>

            <div className="input-wrapper-edit">
              <label htmlFor="lastName">Last Name</label>
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