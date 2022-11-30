import { headers } from "../utils/headers";
import axios from "axios"

export const register = async (username) => {
  
  const response =  await axios.post(`${process.env.REACT_APP_BASE_URL}/register`,{
	username: username
  })

  return response;
}

export const getLeaderboard = async () => {
  
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/getLeaderboard`)
  console.log(response.data.leaderboard.Items)
  const orderedResponse = response.data.leaderboard.Items.sort((a, b) => parseFloat(b.points) - parseFloat(a.points));

  return orderedResponse;
}

export const updateLeaderboard = async (username, points) => {
  const leaderboard = await getLeaderboard()
  const index = leaderboard.findIndex(x => x.username === username)

  if ( points > leaderboard[index].points) {
	const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/update`,{
		"username": username,
		"points": points
	})
	return response;
  }
  return
}
