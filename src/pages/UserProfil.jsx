import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateProfilModal from "../components/UpdateProfilModal";
import { setCredentials } from "../utils/authSlice"
import { setVisibility } from "../utils/editingFormSlice"
import { getUserData } from "../service/requestApi";

const UserProfil = () => {
  const token = useSelector((state) => state.auth.token)
  const userData = useSelector((state) => state.auth.userData);
  const showModalEdit = useSelector((state) => state.editingForm.visible);
  const dispatch = useDispatch();

  useEffect(() =>{
    async function fetchDataAndLog() {
      const userData = await getUserData(token)
      dispatch(setCredentials(userData));
    }
    fetchDataAndLog() 
  },[token,dispatch])
  
  const handleClick = async (event) => {
    event.preventDefault();
    dispatch(setVisibility(!showModalEdit));
  } 

  document.title = `Argent Bank - Profil of ${userData?.firstName} ${userData?.lastName}`;
  
  return (
    <main className="main bg-dark" >
    <div className="header" style={{marginTop:"50px",}}>
      <h1 className="profil-title">Welcome back</h1>
        {showModalEdit ? 
          <UpdateProfilModal/> 
        : 
        <>
          <p className="username">{userData?.firstName +" "+ userData?.lastName} !</p>
          <button className="edit-button" onClick={handleClick}>Edit Name</button>
        </>
        } 
    </div>
    <h2 className="sr-only">Accounts</h2>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
        <p className="account-amount">$10,928.42</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
        <p className="account-amount">$184.30</p>
        <p className="account-amount-description">Current Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  </main>
  )
}

export default UserProfil