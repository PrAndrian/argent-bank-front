import { useDispatch, useSelector } from 'react-redux';
import ArgentBankLogo from '../assets/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../utils/authSlice';

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
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
          <Link className="main-nav-item" to='/profil' >
            <i className="fa fa-user-circle"></i>
            Profil
          </Link>

          <button 
            className="main-nav-item"  
            onClick={handleClick}
          >
              <i className="fa fa-user-circle"></i>
              Logout
          </button>
        </>
      )
    : 
      (
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )
    }

    </div>
  </nav>
  )
}

export default Navbar