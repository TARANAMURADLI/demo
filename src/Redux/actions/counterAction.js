import actionTypes from "../actionTypes";

const countIncrease = (val) =>{
    return{type: actionTypes.count.Count_INCREASE, payload:val}
}

const countDecrease = (val) =>{
    return{type: actionTypes.count.Count_DECREASE, payload:val}
}

const changeCount={countIncrease,countDecrease}

export default changeCount;