import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import logo from './images/financial-advisor.png';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, isClosed] = useState();
  return (
    <div className="nav-container">
      <section className="logo-container">
        <NavLink className="desktop-ul-li" to="/">
          <img className="logo" src={logo} alt="Webapage Logo" />
        </NavLink>
        <NavLink className="desktop-ul-li" to="/contact">
          <h1 className="app-name">Coins Info</h1>
        </NavLink>
      </section>
      <section className="for-phone">
        <Hamburger
          color="aqua"
          toggled={isOpen}
          toggle={isClosed}
          duration={0.8}
          label="Show menu"
        />
        {
        isOpen
          ? (
            <ul className="nav-popUp-ul">
              <li>
                <NavLink className="nav-popUp-li" onClick={() => isClosed(false)} to="/" activeclassname="active-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-popUp-li" onClick={() => isClosed(false)} to="/contact" activeclassname="active-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          )
          : null
        }
      </section>
      <section className="for-desktop">
        <ul className="desktop-ul">
          <li>
            <NavLink className="desktop-ul-li" to="/" activeclassname="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="desktop-ul-li" to="/contact" activeclassname="active-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}
