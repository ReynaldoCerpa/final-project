import "../styles/leaderboard.scss"

export const LeaderboardListItem = ({name, points, position}) => {
  return (
	<div className="leaderboardListItem">
	  <p>{name}</p>
	  <p>{points}</p>
	</div>
  )
}

