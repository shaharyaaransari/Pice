import actionTypes from "./action/actionType"

export const makeNewMove = ({newPosition})=>{
       return {
          type:actionTypes.NEW_MOVE,
          payload:{newPosition}
       }
}

export const generateCanditateMoves = ({candidateMoves})=>{
      
   return {
      type:actionTypes.GENRATE_CANDIDATE_MOVE,
      payload:{candidateMoves}
   }
}

export const clearCandidate = ()=>{
      
   return {
      type:actionTypes.CLEAR_CANDIDATE_MOVE,
      
   }
}

export const playerQuit = ({ winner, quittingPlayer }) => {
   return {
     type: actionTypes.PLAYER_QUIT,
     payload: { winner, quittingPlayer },
   };
 };
 


