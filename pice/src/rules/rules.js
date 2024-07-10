import { getRookMoves, KnightMoves } from "./getMoves";

const arbiter = {
  getRegularMoves: function({ position, piece, rank, file }) {
    if (piece.endsWith('n'))
        return KnightMoves({position,rank,file});
    if (piece.endsWith('r'))
    return getRookMoves({position, piece, rank, file});
  }
};

export default arbiter;
