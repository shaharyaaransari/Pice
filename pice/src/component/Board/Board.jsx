import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import "./Board.css";
import { Ranks } from "../bits/Ranks";
import { Files } from "../bits/Files";
import { Pieces } from "../Pieces/Pieces";
import { AppContext } from "../../context/Context";
import { playerQuit } from "../../reducer/move";

export default function Board() {
  const { appState, dispatch } = useContext(AppContext);
  const position = appState.position[appState.position.length - 1];

  const getClassName = (i, j) => {
    let c = "tile ";
    c += (i + j) % 2 === 0 ? "tile--dark" : "tile--light";
    if (appState.candidateMoves?.find((m) => m[0] === i && m[1] === j)) {
      if (position[i][j]) c += " attacking";
      else c += " highlight";
    }
    return c;
  };

  const handleQuit = () => {
    const quittingPlayer = appState.turn === "w" ? "White" : "Black";
    const winner = appState.turn === "w" ? "Black" : "White";
    dispatch(playerQuit({ winner, quittingPlayer }));
  };

  useEffect(() => {
    if (appState.winner) {
      Swal.fire({
        title: `${appState.winner} wins!`,
        text: `${appState.quittingPlayer} quit the game.`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  }, [appState.winner, appState.quittingPlayer]);

  const ranks = Array(8).fill().map((x, i) => 8 - i);
  const files = Array(8).fill().map((x, i) => i + 1);

  return (
    <div className="board-container">
      <div className="controls">
        <button onClick={handleQuit}>Quit</button>
      </div>
      <div className="board">
        <Ranks ranks={ranks} />
        <div className="tiles">
          {ranks.map((rank, i) =>
            files.map((file, j) => (
              <div key={`${file}${rank}`} className={getClassName(7 - i, j)}></div>
            ))
          )}
        </div>
        <Pieces />
        <Files files={files} />
      </div>
    </div>
  );
}
