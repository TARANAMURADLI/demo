import actionTypes from "../actionTypes";

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.count.Count_INCREASE:
      return state + action.payload
    case actionTypes.count.Count_DECREASE:
   return state - action.payload

    default:
        return state
  }
}

export default counterReducer
