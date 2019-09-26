import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from './../firebase';
class AddTodo extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let content = e.target.content.value;
        let createdDate = new Date();
        let newTodo = {
            createdDate,
            content
        }
        firebase.addTodo(newTodo);
        e.target.reset();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="form-control add-todo" placeholder="Add todo" name="content" />
            </form>
        );
    }
}

export default connect()(AddTodo);

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addTodo: (newTodo) => {
//             dispatch({ type: "ADD_TODO", newTodo })
//         }
//     }
// }

// export default connect(null, mapDispatchToProps)(AddTodo);