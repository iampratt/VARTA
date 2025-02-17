import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navbar.css';
import DarkModeToggle from 'react-dark-mode-toggle';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} py-0`}>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/general'>
          <div className={`logo-${props.mode} mx-4`}>SAMACHAR</div>
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='d-flex mx-5'>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item mx-2'>
                <NavLink className='nav-link' aria-current='page' to='/general'>
                  General
                </NavLink>
              </li>
              <li className='nav-item mx-2'>
                <NavLink className='nav-link' to='/business'>
                  Business
                </NavLink>
              </li>
              <li className='nav-item mx-2'>
                <NavLink className='nav-link' to='/technology'>
                  Technology
                </NavLink>
              </li>
              <li className='nav-item mx-2'>
                <NavLink className='nav-link' to='/science'>
                  Science
                </NavLink>
              </li>
              <li className='nav-item mx-2'>
                <NavLink className='nav-link' to='/sports'>
                  Sports
                </NavLink>
              </li>
              <li className='nav-item mx-2'>
                <NavLink className='nav-link' to='/health'>
                  Health
                </NavLink>
              </li>
              <li className='nav-item mx-2'>
                <NavLink className='nav-link' to='/entertainment'>
                  Entertainment
                </NavLink>
              </li>
            </ul>
            <div className='toggle-btn mx-3'>
              <DarkModeToggle
                onChange={props.toggleMode}
                checked={!props.isDarkMode}
                size={70}
              ></DarkModeToggle>
            </div>
            <div
              style={{
                marginLeft: 40,
                paddingBottom: 5,
                fontWeight: 'bold',
                fontSize: 17,
              }}
            >
              Hello, {props.user}
            </div>
            <Link to='/login'>
              <button className='login'>Log Out</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
