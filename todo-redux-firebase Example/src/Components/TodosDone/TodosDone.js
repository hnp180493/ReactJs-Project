import React, { Component } from 'react';
import firebase from '../firebase';
import TodoDoneItem from './TodoDoneItem';
import SyncLoader from 'react-spinners/SyncLoader';
class TodosDone extends Component {
    constructor() {
        super();
        this.state = {
            todosDone: [],
            loading: true
        }
    }
    async componentDidMount() {
        let data = await firebase.getTodoDone();
        this.setState({
            todosDone: data
        })
    }

    async componentDidUpdate() {
        let data = await firebase.getTodoDone();
        this.setState({
            todosDone: data,
            loading: false
        })
    }

    renderTodosDone() {
        return this.state.todosDone.map((item, index) => {
            return (
                <TodoDoneItem key={index} nodeTodo={item}/>
            )
        })
    }

    render() {
        const override = `
            text-align: center;
        `;
        return (
            <div className="todolist">
                <h1>Already Done</h1>
                <SyncLoader
                    css={override}
                    sizeUnit={"px"}
                    size={10}
                    color={'#123abc'}
                    loading={this.state.loading}
                />
                <ul id="done-items" className="list-unstyled">
                    {this.renderTodosDone()}
                </ul>
            </div>
        );
    }
}

export default TodosDone;