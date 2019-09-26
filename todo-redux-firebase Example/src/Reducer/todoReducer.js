import firebase from './../Components/firebase';

let todoState = [];
const todoReducer = (state = todoState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            firebase.addTodo(action.newTodo);
            return state;
        case "CHANGE_TODO_STATUS":
            firebase.editTodo(action.nodeTodo);
            return [...state, action.nodeTodo];
        default:
            return state;
    }
}

export default todoReducer;