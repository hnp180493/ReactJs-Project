import React, { Component } from 'react';
import firebase from './../firebase'
class TodoDoneItem extends Component {
    clickUndone = () => {
        let editTodo = {
            id: this.props.nodeTodo.id,
            todo: {
                ...this.props.nodeTodo.todo,
                isDone: false
            }   
        }
        firebase.editTodo(editTodo);
    }

    removeTodoDone = () =>{
        let todoId = this.props.nodeTodo.id;
        firebase.removeTodo(todoId);
    }
    render() {
        return (
            <li>
                <div className="undone" onClick={this.clickUndone}>
                    {this.props.nodeTodo.todo.content}
                </div>

                <button className="remove-item btn btn-default btn-xs pull-right" onClick={this.removeTodoDone}>
                    <span className="glyphicon glyphicon-remove" />
                </button>
            </li>
        );
    }
}

export default TodoDoneItem;