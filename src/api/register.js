import { headers } from "../utils/headers";

export const register = async (username) => {
  
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/register`,{
	method: "post",
	headers: headers,
	body: JSON.stringify(username)
  })

  console.log(response)
}
