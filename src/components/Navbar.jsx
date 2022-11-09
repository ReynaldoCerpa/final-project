import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div className='navbar'>
    <li>
      <Link to="/Home">Home</Link>
    </li>
  </div>
  );
}
export default Navbar;
