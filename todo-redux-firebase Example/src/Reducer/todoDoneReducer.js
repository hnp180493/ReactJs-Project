
let todoDoneState = [];
const todoDoneReducer = (state = todoDoneState, action) =>{
    switch(action.type){
        case "UNDONE_TODO":
            return state;
        default:
            return state;
    }
}

export default todoDoneReducer;