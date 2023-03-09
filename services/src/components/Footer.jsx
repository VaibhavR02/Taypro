import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { RxTwitterLogo } from 'react-icons/rx';
import { FiYoutube } from 'react-icons/fi';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <Link to="/">
          <RxTwitterLogo />
        </Link>
        <Link to="/">
          <BsFacebook />
        </Link>
        <Link to="/">
          <FiYoutube />
        </Link>
        <Link to="/">
          <BsInstagram />
        </Link>
        <Link to="/">
          <BsLinkedin />
        </Link>
      </div>
      <div className="text">
        <p> © Copyright 2023 Taypro Private Limited. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
