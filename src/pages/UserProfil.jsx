import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateProfilModal from "../components/UpdateProfilModal";
import { setCredentials } from "../utils/authSlice"
import { setVisibility } from "../utils/editingFormSlice"
import { getUserData } from "../service/requestApi";
import { accounts } from "../data/accountsMock";
import Account from "../components/Account";

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
    {accounts.map(account =>(
      <Account
        key={account.title}
        title={account.title}
        amount={account.amount}
        description={account.description}
      />
    ))}
  </main>
  )
}

export default UserProfil