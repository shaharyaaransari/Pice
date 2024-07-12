import { BishopMoves, getRookMoves, KingMoves, KnightMoves, PawnCaptures, PawnMoves, QueenMoves } from "./getMoves";

const arbiter = {
  getRegularMoves: function({ position, piece, rank, file }) {
    if (piece.endsWith('n')) 
      return KnightMoves({position, rank, file});
    if (piece.endsWith('b'))
      return BishopMoves({position, piece, rank, file});
    if (piece.endsWith('r'))
      return getRookMoves({position, piece, rank, file});
    if (piece.endsWith('q'))
      return QueenMoves({position, piece, rank, file});
    if (piece.endsWith('k'))
      return KingMoves({position, piece, rank, file});
    if (piece.endsWith('p'))
      return PawnMoves({position, piece, rank, file});
  },
  getValidMoves: function ({position, prevPosition, piece, rank, file}) {
    let moves = this.getRegularMoves({position, piece, rank, file});
    
    if (piece.endsWith('p')) {
      moves = [
        ...moves,
        ...PawnCaptures({position, prevPosition, piece, rank, file})
      ];
    }

    // Filter for capture moves
    const captureMoves = moves.filter(([x, y]) => position[x][y] !== '');
    if (captureMoves.length > 0) {
      return captureMoves;
    }
    
    return moves;
  },
  getAllCaptureMoves: function(position, turn) {
    let captureMoves = [];
    for (let rank = 0; rank < 8; rank++) {
      for (let file = 0; file < 8; file++) {
        const piece = position[rank][file];
        if (piece.startsWith(turn)) {
          const moves = this.getValidMoves({ position, piece, rank, file });
          captureMoves = captureMoves.concat(moves.filter(([x, y]) => position[x][y] !== ''));
        }
      }
    }
    return captureMoves;
  },
  checkWin: function (position) {
    let whitePieces = 0;
    let blackPieces = 0;
  
    position.forEach(row => {
      row.forEach(cell => {
        if (cell.startsWith('w')) {
          whitePieces++;
        } else if (cell.startsWith('b')) {
          blackPieces++;
        }
      });
    });
  
    if (whitePieces === 0) {
      return 'b'; // Black wins if white has no pieces left
    } else if (blackPieces === 0) {
      return 'w'; // White wins if black has no pieces left
    }
  
    return null; // No winner yet
  }
};

export default arbiter;
