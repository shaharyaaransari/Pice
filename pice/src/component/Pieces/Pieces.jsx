import React, { useState, useRef } from "react";
import "./Pieces.css";
import { Piece } from "./Piece";
import { copyPosition, createPosition } from "../../helper";
export const Pieces = () => {
  const [position, setPosition] = useState(createPosition());
  const ref = useRef();
  const onDrop = (e) => {
    const newPosition = copyPosition(position);
    const [p, rank, file] = e.dataTransfer.getData("text").split(",");
    const { x, y } = calculateCoords(e);
    newPosition[rank][file] = "";
    newPosition[x][y] = p;
    setPosition(newPosition);
  };
  const calculateCoords = (e) => {
    const { left, top, width } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
   
  };

  const onDragOver = e => {e.preventDefault()}
  return (
    <div ref={ref} onDragOver={onDragOver} onDrop={onDrop} className="pieces">
      {position.map((r, rank) =>
        r.map((f, file) =>
          position[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={position[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};
