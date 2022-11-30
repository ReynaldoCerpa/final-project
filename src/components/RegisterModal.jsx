import { Modal, Input, Button } from "@mantine/core"
import { register } from "../api/apicontrollers.js"
import React, { useState } from 'react';
import "../styles/modal.scss"

export default function RegisterModal({opened, setOpened}) {

  const [username, setUsername] = useState("")
  const [alert, setAlert] = useState("")

  async function handleRegister() {
	let checkUsername = await register(username)
	if(checkUsername.data.message === "Username already taken"){
	  setAlert("Username already taken")
	} else {
	  localStorage.setItem("username", username)
	  setOpened(false)
	}
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
		  <h3>{alert}</h3>
		  <Input
			placeholder="Username"
			onChange={(e)=>setUsername(e.target.value)}
			onKeyDown={
			  (e)=>{
				if(e.keyCode === 13){
					handleRegister(username)
				}
			  }
			}
		  />
		  <Button
			  className="button"
			  onClick={()=>{
				handleRegister(username)
			  }}>
			Save
		  </Button>
		</div>
	  </Modal>
  )
}
