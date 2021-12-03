import React from 'react';
import Logo from '../img/LogoW.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/"> 
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="35" height="35" className="d-inline-block align-top" alt="" />
          Weather App
        </span>
      </Link>
        <SearchBar onSearch={onSearch}/>
      <Link to='/about'>
        <span id="about">About</span>
      </Link>
    </nav>
  );
};

export default Nav;
