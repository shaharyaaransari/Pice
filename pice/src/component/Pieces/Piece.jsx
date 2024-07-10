import "./Pieces.css";
import { AppContext } from "../../context/Context";
import { useContext } from "react";
import arbiter from "../../rules/rules";
import { generateCanditateMoves } from "../../reducer/move";

export const Piece = ({ rank, file, piece }) => {
  const { appState, dispatch } = useContext(AppContext);
  const { turn, position } = appState;
  const currentPosition = position[position.length - 1];

  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${piece},${rank},${file}`);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
    
    if (turn === piece[0]) {
      const candidateMoves = arbiter.getRegularMoves({ position: currentPosition, piece, rank, file });
      
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
