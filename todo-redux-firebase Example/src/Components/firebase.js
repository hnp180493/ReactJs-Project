import firebase from 'firebase/app';
// import 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA4udChgrWcCrIlohvUhWD1TmlIsj5hCyg",
    authDomain: "firstfirebase-884ff.firebaseapp.com",
    databaseURL: "https://firstfirebase-884ff.firebaseio.com",
    projectId: "firstfirebase-884ff",
    storageBucket: "firstfirebase-884ff.appspot.com",
    messagingSenderId: "270409506432",
    appId: "1:270409506432:web:d9d89d2ceaec27606c9065"
};

class FireBase {
    constructor() {
        // // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        this.ref = firebase.database().ref('Note');
    }
    getTodos() {
        let data = this.ref.once("value").then(function (todos) {
            let arr = [];
            todos.forEach(todo => {
                if (todo.val().isDone !== true) {
                    arr.push({
                        id: todo.key,
                        todo: todo.val()
                    })
                }
            })
            return arr;
        });

        return data;
    }
    getTodoDone() {
        let data = this.ref.once('value').then(function (todos) {
            let arr = [];
            todos.forEach(todo => {
                if (todo.val().isDone === true) {
                    arr.push({
                        id: todo.key,
                        todo: todo.val()
                    })
                }
            })

            return arr;
        })

        return data;
    }
    addTodo(newTodo) {
        this.ref.push(newTodo);
    }
    removeTodo(todoId) {
        this.ref.child(todoId).remove();
    }
    editTodo(editTodo) {
        this.ref.child(editTodo.id).update(editTodo.todo);
    }
}
export default new FireBase();

