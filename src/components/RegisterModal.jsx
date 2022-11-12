import { Modal, Input, Button } from "@mantine/core"
import React, { useState } from 'react';
import "../styles/modal.scss"

export default function RegisterModal({opened, setOpened}) {

  const [username, setUsername] = useState("")

  // Set username Local Storage
  function setUsernameLS(username) {
	localStorage.setItem("username",username)
	setOpened(false)
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
				console.log(e)
				if(e.keyCode === 13){
					setUsernameLS(username)
				}
			  }
			}
		  />
		  <Button
			  className="button"
			  onClick={()=>{
				setUsernameLS(username)
			  }}>
			Save
		  </Button>
		</div>
	  </Modal>
  )
}
