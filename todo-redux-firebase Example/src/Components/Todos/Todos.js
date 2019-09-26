import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import firebase from './../firebase';
import SyncLoader from 'react-spinners/SyncLoader';
import {connect} from 'react-redux';
class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            loading: true
        }
    }

    async componentDidMount() {
        let todos = await firebase.getTodos();
        this.setState({
            todos: todos,
            loading: false
        })
    }

    async componentDidUpdate() {
        let todos = await firebase.getTodos();
        this.setState({
            todos: todos
        })
    }

    renderTodos() {
        return this.state.todos.map((item, index) => {
            return (<Todo key={index} nodeTodo={item} />)
        })
    }

    render() {
        const override = `
            text-align: center;
        `;
        return (
            <div className="todolist not-done">
                <h1>Todos</h1>
                <AddTodo />

                {/* <button id="checkAll" className="btn btn-success">Mark all as done</button> */}
                <hr />
                <SyncLoader
                    css={override}
                    sizeUnit={"px"}
                    size={10}
                    color={'#123abc'}
                    loading={this.state.loading}
                />
                <ul id="sortable" className="list-unstyled">
                    {
                        this.renderTodos()
                    }
                </ul>
                
                <div className="todo-footer">
                    <strong><span className="count-todos">{this.state.todos.length} </span></strong>
                    Items Left
                </div>
            </div>
        );
    }
}

// let mapStateToProps = (state) =>{
//     return {
//         loading: state.utilities.loading
//     }
// }

// let abc = (dispatch) =>{
//     return {
//         toggleLoading: ()=>{
//             dispatch({type: "LOADING"})
//         }
//     }
// }

export default connect()(Todos);