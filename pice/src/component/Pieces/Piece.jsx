import React, { useContext } from "react";
import "./Pieces.css";
import { AppContext } from "../../context/Context";
import { generateCanditateMoves } from "../../reducer/move";
import arbiter from "../../rules/rules";

export const Piece = ({ rank, file, piece }) => {
  const { appState, dispatch } = useContext(AppContext);
  const { turn, position } = appState;
  const currentPosition = position[position.length - 1];
  const prevPosition = position[position.length - 2];

  const handleDragStart = (e) => {
      console.log("start")
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${piece},${rank},${file}`);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
    
    if (turn === piece[0]) {
      const candidateMoves = arbiter.ValidMoves({ position: currentPosition, prevPosition, piece, rank, file });
      dispatch(generateCanditateMoves({ candidateMoves }));
    }
  };

  const handleDragEnd = (e) => {
    e.target.style.display = "block";
  };

  return (
    <div
      className={`piece ${piece} p-${file}${rank}`}
      draggable={true}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    ></div>
  );
};
