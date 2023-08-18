import { useDispatch, useSelector } from 'react-redux';
import ArgentBankLogo from '../assets/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../utils/authSlice';

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const userDataLocalStorage = JSON.parse(localStorage.getItem('userData'));
  const userDataToolkit = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(logout({}));
    navigate('/', {replace: true});
  }

  return (
    <nav className="main-nav">
    <Link className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src={ArgentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
    {token ? 
      (
        <>
          <Link className="main-nav-item" to='/profile' >
            <i className="fa fa-user-circle"></i>
            &nbsp;
            { 
              userDataToolkit?.firstName ? 
                userDataToolkit?.firstName 
              : 
                userDataLocalStorage?.firstName 
            }
          </Link>

          <a 
            className="main-nav-item"  
            onClick={handleClick}
          >
            Logout
          </a>
        </>
      )
    : 
      (
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          &nbsp;Sign In
        </Link>
      )
    }

    </div>
  </nav>
  )
}

export default Navbar