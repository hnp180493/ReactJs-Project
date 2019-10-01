const initState = {
    comments: [],
    forceReload: false
}

const commentReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_COMMENTS":
            return {
                ...state,
                comments: action.comments,
                forceReload: false
            }
        case "ADD_COMMENT":
            return {
                ...state,
                forceReload: true
            }
        default:
            return state;
    }
}

export default commentReducer;