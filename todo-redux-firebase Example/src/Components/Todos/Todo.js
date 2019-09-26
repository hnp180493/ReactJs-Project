import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from './../firebase';
class Todo extends Component {
    clickDone = () => {
        let nodeTodo = {
            id: this.props.nodeTodo.id,
            todo: {
                ...this.props.nodeTodo.todo,
                isDone: true
            }

        }
        firebase.editTodo(nodeTodo);
    }
    render() {
        return (
            <li className="ui-state-default">
                <div className="checkbox">
                    <label onClick={this.clickDone}>
                        {this.props.nodeTodo.todo.content}
                    </label>
                </div>
            </li>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeTodoStatus: (nodeTodo) => {
//             dispatch({ type: "CHANGE_TODO_STATUS", nodeTodo })
//         }
//     }
// }

export default connect()(Todo);