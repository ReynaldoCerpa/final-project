import { Modal, Input, Button } from "@mantine/core"
import React, { useState } from 'react';
import "../styles/modal.scss"

export default function RegisterModal({opened, setOpened}) {

  const [username, setUsername] = useState("")

  // Set username Local Storage
  function setUsernameLS(username) {
	localStorage.setItem("username",username)
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
		  />
		  <Button
			  onClick={()=>{
				setUsernameLS(username)
				setOpened(false)
			  }}>
			Save
		  </Button>
		</div>
	  </Modal>
  )
}
