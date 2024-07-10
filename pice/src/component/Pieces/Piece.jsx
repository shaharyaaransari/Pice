import React from 'react';
import './Pieces.css';

export const Piece = ({ rank, file, piece }) => {


  return (
    <div
      className={`piece ${piece} p-${file}${rank}`}
      draggable={true}
    
    ></div>
  );
};
