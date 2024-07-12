export const getRookMoves = ({position,piece,rank,file}) => {
       console.log(position,piece,rank,file)
  const moves = []
  const us = piece[0]
  const enemy = us === 'w' ? 'b' : 'w'

  const direction = [
      [-1,0],
      [1,0],
      [0,-1],
      [0,1],
  ]

  direction.forEach(dir => {
      for (let i = 1; i <= 8; i++) {
          const x = rank+(i*dir[0])
          const y = file+(i*dir[1])
          if(position?.[x]?.[y] === undefined)
              break
          if(position[x][y].startsWith(enemy)){
              moves.push ([x,y])
              break;
          }
          if(position[x][y].startsWith(us)){
              break
          }
          moves.push ([x,y])
      }
  })

  return moves
  };


    export const KnightMoves = ({position,rank,file})=>{
     const moves = [];
       const enemy = position[rank][file].startsWith('w') ? 'b' : 'w'
       const candidates = [
        [-2,-1],
        [-2,1],
        [-1,-2],
        [-1,2],
        [1,-2],
        [1,2],
        [2,-1],
        [2,1],
    ]
    candidates.forEach(c => {
        const cell = position?.[rank+c[0]]?.[file+c[1]]
        if(cell !== undefined && (cell.startsWith(enemy) || cell === '')){
            moves.push ([rank+c[0],file+c[1]])
        }
    })
    return moves
    }


    export const BishopMoves = ({position,piece,rank,file}) => {
      const moves = []
      const us = piece[0]
      const enemy = us === 'w' ? 'b' : 'w'
  
      const direction = [
          [-1,-1],
          [-1,1],
          [1,-1],
          [1,1],
      ]
  
      direction.forEach(dir => {
          for (let i = 1; i <= 8; i++) {
              const x = rank+(i*dir[0])
              const y = file+(i*dir[1])
              if(position?.[x]?.[y] === undefined)
                  break
              if(position[x][y].startsWith(enemy)){
                  moves.push ([x,y])
                  break;
              }
              if(position[x][y].startsWith(us)){
                  break
              }
              moves.push ([x,y])
          }
      })
      return moves
  }
  

  export const QueenMoves = ({position,piece,rank,file}) => {
    const moves = [
        ...BishopMoves({position,piece,rank,file}),
        ...getRookMoves({position,piece,rank,file})
    ]
    
    return moves
}


export const KingMoves = ({position,piece,rank,file}) => {
  let moves = []
  const us = piece[0]
  const direction = [
      [1,-1], [1,0],  [1,1],
      [0,-1],         [0,1],
      [-1,-1],[-1,0], [-1,1],
  ]

  direction.forEach(dir => {
      const x = rank+dir[0]
      const y = file+dir[1]
      if(position?.[x]?.[y] !== undefined && !position[x][y].startsWith(us))
      moves.push ([x,y])
  })
  return moves
}

export const PawnMoves = ({position,piece,rank,file}) => {

  const moves = []
  const dir = piece==='wp' ? 1 : -1

  // Move two tiles on first move
  if (rank % 5 === 1){
      if (position?.[rank+dir]?.[file] === '' && position?.[rank+dir+dir]?.[file] === ''){
          moves.push ([rank+dir+dir,file])
      }
  }

  // Move one tile
  if (!position?.[rank+dir]?.[file]){
      moves.push ([rank+dir,file])
  }

  return moves
}

export const PawnCaptures = ({ position, prevPosition, piece, rank, file }) => {
    const moves = [];
    const dir = piece === 'wp' ? 1 : -1;
    const enemy = piece[0] === 'w' ? 'b' : 'w';
  
    // Capture enemy to left
    if (position?.[rank + dir]?.[file - 1] && position[rank + dir][file - 1].startsWith(enemy)) {
      moves.push([rank + dir, file - 1]);
    }
  
    // Capture enemy to right
    if (position?.[rank + dir]?.[file + 1] && position[rank + dir][file + 1].startsWith(enemy)) {
      moves.push([rank + dir, file + 1]);
    }
  
    // EnPassant
    const enemyPawn = dir === 1 ? 'bp' : 'wp';
    const adjacentFiles = [file - 1, file + 1];
    if (prevPosition) {
      if ((dir === 1 && rank === 4) || (dir === -1 && rank === 3)) {
        adjacentFiles.forEach(f => {
          if (position?.[rank]?.[f] === enemyPawn && 
              position?.[rank + dir + dir]?.[f] === '' &&
              prevPosition?.[rank]?.[f] === '' && 
              prevPosition?.[rank + dir + dir]?.[f] === enemyPawn) {
            moves.push([rank + dir, f]);
          }
        });
      }
    }
  
    return moves;
  };
  