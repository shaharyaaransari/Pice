import { createPosition } from "./helper";

export const initGame = {
      position:[createPosition()],
         turn:'w',
         candidateMoves:[],
         winner: null,
         quittingPlayer: null,
}