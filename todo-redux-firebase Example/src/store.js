import { createStore, combineReducers } from 'redux';
import todoReducer from './Reducer/todoReducer';
import todoDoneReducer from './Reducer/todoDoneReducer';
import utilityReducer from './Reducer/Utilities';

let allReducer = combineReducers({
    todos: todoReducer,
    todosDone: todoDoneReducer,
    utilities: utilityReducer
})

let store = createStore(allReducer);

export default store;