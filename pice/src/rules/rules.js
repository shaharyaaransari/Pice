import { BishopMoves, getRookMoves, KingMoves, KnightMoves, PawnCaptures, PawnMoves, QueenMoves } from "./getMoves";

const arbiter = {
  getRegularMoves: function({ position, piece, rank, file }) {
    if (piece.endsWith('n')) 
        return KnightMoves({position,rank,file});
        if (piece.endsWith('b'))
            return BishopMoves({position,piece,rank,file});
    if (piece.endsWith('r'))
    return getRookMoves({position, piece, rank, file});
    if (piece.endsWith('q'))
        return QueenMoves({position,piece,rank,file});
    if (piece.endsWith('k'))
        return KingMoves({position,piece,rank,file});
    if (piece.endsWith('p'))
        return PawnMoves({position,piece,rank,file})
   
  },
  ValidMoves : function ({position,prevPosition,piece,rank,file}) {
    let moves = this.getRegularMoves({position,piece,rank,file})
    

    if (piece.endsWith('p')){
        moves = [
            ...moves,
            ...PawnCaptures({position,prevPosition,piece,rank,file})
        ]
    }
     return moves
},

};

export default arbiter;
