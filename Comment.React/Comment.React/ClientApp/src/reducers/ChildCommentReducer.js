const initCommentState = {
    forceReload: false,
    parentId: 0
}

const childCommentReducer = (state = initCommentState, action) => {
    switch (action.type) {
        case "GET_CHILD_COMMENTS":
            return {
                ...state,
                parentId: action.parentId,
                forceReload: false
            }
        case "ADD_CHILD_COMMENT":
            return {
                ...state,
                forceReload: true,
            }
        default:
            return state;
    }
}

export default childCommentReducer;