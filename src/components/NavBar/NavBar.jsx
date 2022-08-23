import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import logo from '../../../public/assets/logo.png';

const NavBar = () => {
  let location = useLocation();

  let nav

  switch (location.pathname) {
    case "/":
      nav = <>
        <Link to="/signin">Sign In</Link>
        <Link className="startbutton" to="/signup">Get Started</Link>
      </>
      break;
    case "/signin":
      nav = <>
        <Link className="signinbutton" to="/signup">Sign Up</Link>
      </>
      break;
    case "/signup":
      nav = <>
        <Link className="signupbutton" to="/signin">Sign In</Link>
      </>
      break;
    default:
      nav = <>
        <Link to="/activities">My Activity</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link className="settingbutton" to="/setting">Setting</Link>
      </>
      break;
  }

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt='logo' />
        EXTRACKS
      </Link>
      <nav>
        {nav}
      </nav>
    </div>
  );
};

export default NavBar;

