import { useSelector } from 'react-redux';
import ArgentBankLogo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const token = useSelector((state) => state.auth.token);

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
        <button className="main-nav-item" >
          <i className="fa fa-user-circle"></i>
          Logout
        </button>
      )
    
    : 
      (<Link className="main-nav-item" to="/sign-in">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>)
    }

    </div>
  </nav>
  )
}

export default Navbar