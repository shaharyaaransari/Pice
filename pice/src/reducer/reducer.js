import actionTypes from "./action/actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEW_MOVE: {
      let { turn, position } = state;
      turn = turn === "w" ? "b" : "w";
      position = [
        ...position,
        action.payload.newPosition
      ];
      return { ...state, position, turn };
    }
    case actionTypes.GENRATE_CANDIDATE_MOVE: {
      return {
        ...state,
        candidateMoves: action.payload.candidateMoves
      };
    }
    case actionTypes.CLEAR_CANDIDATE_MOVE: {
      return {
        ...state,
        candidateMoves: []
      };
    }
    default:
      return state;
  }
};
