import React from 'react';
import {  Link } from "react-router-dom";
import "../styles/navbar.scss"

const Navbar= () =>{
  return (
  <div className='navbar'>
	<div className="navbar-items-container">
      <Link to="/">Play!</Link>
      <Link to="/leaderboard">Leaderboard</Link>
	</div>
  </div>
  );
}
export default Navbar;
