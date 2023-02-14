import React from 'react'
import { Navbar, Container} from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';


const Header = () => {
  const location = useLocation();

  return (
    <div data-aos="zoom-out" class="navbar">
      <h2>Javascript Developer</h2>
      <ul class="navbar__list">
      <Link to="/About">
        <li class="navbar__item">
        
          <a href="/About">About Me</a>
          
        </li>
        </Link>
        <Link to="/Skills">
        <li class="navbar__item">
          <a href="#">Skills</a>
        </li>
        </Link>
        <Link to="/Other Skills">
        <li class="navbar__item">
          <a href="#">Other Skills</a>
        </li>
        </Link>
      </ul>
      <img
              src="./image/menu.png"
              alt="error:("
              class="navbar__btn_burger"
            />
    </div>
  )
}

export default Header