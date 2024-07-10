import actionTypes from "./action/actionType"

export const reducer = (state,action)=>{
    switch(action.type){
  case actionTypes.NEW_MOVE:{
      let {turn,postion}=state
         turn = turn ==="w"?"b":"w"
            postion=[
                ...postion,
                action.payload.newPosition
            ]
    return {...state,postion,turn}
  }
    
       default:
      return state;
}
}