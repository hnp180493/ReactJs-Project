import commentReducer from "./reducers/CommentReducer";
const redux = require('redux');

let allReducer = redux.combineReducers({
    comments: commentReducer
})

let store = redux.createStore(allReducer);

// store.subscribe(()=>{
//     console.log(store.getState());
// })


export default store;