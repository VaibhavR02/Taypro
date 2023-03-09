import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header className="fixed-top ">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <nav ref={navRef}>
        <Link to="/" onClick={showNavbar}>
          Home
        </Link>
        <Link to="/ticket" onClick={showNavbar}>
          Raise a Ticket
        </Link>
        <Link to="/alltickets" onClick={showNavbar}>
          Tickets
        </Link>

        <Link to="/" onClick={showNavbar}>
          Contact us
        </Link>
        <Link to="/login" onClick={showNavbar}>
          Login
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
