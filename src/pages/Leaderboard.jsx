import { useEffect, useState } from "react"
import {LeaderboardListItem} from "../components/LeaderboardListItem.jsx"
import { getLeaderboard } from "../api/apicontrollers.js"
import "../styles/leaderboard.scss"

function Leaderboard () {
  const [itemList, setItemList] = useState([])

  useEffect(()=>{
	async function getData(){
	  setItemList(await getLeaderboard())
	}
	getData()
  },[])

  return (
	<div className="leaderboard-main-container">
	  <div className="leaderboard-card-container">
		<h1>Leaderboard</h1>
		<div className="leaderboard-list-items-container">
	<>
		  {
			itemList.map((item, index) => {
			  return (
				<LeaderboardListItem
				  key={index}
				  name={item.username}
				  points={item.points}
				  position={index}
				/>
			  )
			})
		  }
	</>
		</div>
	  </div>
	</div>
  )
} 

export default Leaderboard
