const initCommentState = {
    forceReload: false
}

const commentReducer = (state = initCommentState, action) => {
    switch (action.type) {
        case "GET_COMMENTS":
            return {
                ...state,
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