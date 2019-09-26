let utilityState={
    loading: true
}

const UtilityReducer = (state = utilityState, action) =>{
    switch(action.type){
        case "LOADING":
            return {...state, loading: !utilityState.loading}
        default: 
            return state;
    }
}

export default UtilityReducer;