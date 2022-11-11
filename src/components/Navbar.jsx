import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import RegisterModal from "./RegisterModal.jsx"
import { AiOutlineUser } from "react-icons/ai";
import "../styles/navbar.scss"

const Navbar= () =>{
  const [opened, setOpened] = useState(true);

  useEffect(()=>{
	if(localStorage.getItem('username') !== null){
	  setOpened(false)
	}
  })

  return (
	<div className='navbar'>
	<RegisterModal
	  opened={opened} 
	  setOpened={setOpened}
	/>
	  <div className="navbar-items-container">
		<div>
		  <Link to="/">Play!</Link>
		  <Link to="/leaderboard">Leaderboard</Link>
		</div>
		<div className='username-container'>
		  <p>
			{
			  localStorage.getItem("username") !== null 
			  ? localStorage.getItem("username") : "Guest"
			}
		  </p>
		  <AiOutlineUser
			className='icon'
		  />
		</div>
		
	  </div>
	</div>
  );
}
export default Navbar;
