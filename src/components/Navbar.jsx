import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Input, Button } from "@mantine/core"
import "../styles/navbar.scss"

const Navbar= () =>{
  const [opened, setOpened] = useState(true);

  useEffect(()=>{
	if(localStorage.getItem('username') !== null){
	  setOpened(false)
	}
  })

  return (
	<>
	  <Modal
		opened={opened}
		closeOnClickOutside={false}
		closeButtonLabel={false}
		closeOnEscape={false}
		withCloseButton={false}
	  >
		<h2>Register</h2>
		<Input
		  placeholder="Username"
		/>
		<Button
		  onClick={()=>{setOpened(false)}}
		>
		  Save
		</Button>
	  </Modal>

	  <div className='navbar'>
		<div className="navbar-items-container">
		  <Link to="/">Play!</Link>
		  <Link to="/leaderboard">Leaderboard</Link>
		</div>
	  </div>
	</>
  );
}
export default Navbar;
