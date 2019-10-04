import commentReducer from "./reducers/CommentReducer";
import hubConnectionReducer from "./reducers/signalRReducer";
import childCommentReducer from "./reducers/ChildCommentReducer";

const redux = require('redux');

let allReducer = redux.combineReducers({
    commentReducer: commentReducer,
    hubConnection: hubConnectionReducer,
    childCommentReducer: childCommentReducer
})

let store = redux.createStore(allReducer);

// store.subscribe(()=>{
//     console.log(store.getState());
// })


export default store;