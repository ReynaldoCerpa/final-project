import {LeaderboardListItem} from "../components/LeaderboardListItem.jsx"
import "../styles/leaderboard.scss"

function Leaderboard () {
  const itemList = [
	{name: "Player 1", points: 5000},
	{name: "Player 2", points: 4000},
	{name: "Player 3", points: 3000},
	{name: "Player 4", points: 2000},
	{name: "Player 5", points: 1000},
	{name: "Player 6", points: 900},
	{name: "Player 7", points: 800},
	{name: "Player 8", points: 700},
	{name: "Player 9", points: 600},
	{name: "Player 10", points: 500},
	{name: "Player 11", points: 400},
	{name: "Player 12", points: 300},
  ]
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
				  name={item.name}
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
