import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiDownArrow } from 'react-icons/bi';
import '../styles/Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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

        {/* <Link to="/" onClick={showNavbar}>
          Contact us
        </Link> */}
        {/* <Link to="/login" onClick={showNavbar}>
          Login
        </Link> */}
        <Link to="">
          <p
            // typeof="button"
            variant="light"
            className=" btn-light m-1 w-auto btn-sm log-btn"
          >
            Vaibhav
            <BiDownArrow />
          </p>
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
