import { Modal, Input, Button } from "@mantine/core"
import { register } from "../api/register.js"
import React, { useState } from 'react';
import "../styles/modal.scss"

export default function RegisterModal({opened, setOpened}) {

  const [username, setUsername] = useState("")

  // Set username Local Storage
  function setUsernameLS(username) {
	localStorage.setItem("username",username)
	setOpened(false)
  }

  async function handleRegister(username) {
	let checkUsername = await register(username)
	console.log("Checkusername ",checkUsername)
  }

  return (
	  <Modal
		opened={opened}
		closeOnClickOutside={false}
		closeButtonLabel={false}
		closeOnEscape={false}
		withCloseButton={false}
	  >
		<div className="modal-main-container">
		  <h2>Register</h2>
		  <Input
			placeholder="Username"
			onChange={(e)=>setUsername(e.target.value)}
			onKeyDown={
			  (e)=>{
				if(e.keyCode === 13){
					handleRegister(username)
					//setUsernameLS(username)
				}
			  }
			}
		  />
		  <Button
			  className="button"
			  onClick={()=>{
				handleRegister(username)
				//setUsernameLS(username)
			  }}>
			Save
		  </Button>
		</div>
	  </Modal>
  )
}
