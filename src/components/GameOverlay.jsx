import React from "react";
import TryAgainLogo from "../assets/img/try-again.gif";
import { updateLeaderboard } from "../api/apicontrollers.js"
const GameOverlay = ({ onRestart, board }) => {

  async function handleUpdateLeaderboard(username, points){
	await updateLeaderboard(username, points)
  }

  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
	handleUpdateLeaderboard(localStorage.getItem("username"), board.score)


    return (
      <div className="gameOver" onClick={onRestart}>
        <img
          src={TryAgainLogo}
          alt="Inténtalo de nuevo!!"
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </div>
    );
  }

  return null;
};

export default GameOverlay;
