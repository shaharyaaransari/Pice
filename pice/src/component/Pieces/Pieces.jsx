import React, { useState, useRef, useContext } from "react";
import "./Pieces.css";
import { Piece } from "./Piece";
import { copyPosition } from "../../helper";
import { AppContext } from "../../context/Context";
import { clearCandidate, makeNewMove } from "../../reducer/move";
export const Pieces = () => {
  const ref = useRef();
  const { appState, dispatch } = useContext(AppContext);
  const currentPosition = appState.position[appState.position.length - 1];

  const onDrop = (e) => {
    const newPosition = copyPosition(currentPosition);
    const [p, rank, file] = e.dataTransfer.getData("text").split(",");
    const { x, y } = calculateCoords(e);
    if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
        if(p.endsWith('p') && !newPosition[x][y] && x !== rank && y !== file)
             newPosition[rank][y] =''
    newPosition[rank][file] = "";
    newPosition[x][y] = p;
    dispatch(makeNewMove({ newPosition }));
    }
      dispatch(clearCandidate())
  };

  const calculateCoords = (e) => {
    const { left, top, width } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div ref={ref} onDragOver={onDragOver} onDrop={onDrop} className="pieces">
      {currentPosition.map((r, rank) =>
        r.map((f, file) =>
          currentPosition[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={currentPosition[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};
