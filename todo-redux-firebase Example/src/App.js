import React from "react";
import "./App.css";
import Todos from "./Components/Todos/Todos";
import TodosDone from "./Components/TodosDone/TodosDone";
class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Todos />
                    </div>
                    <div className="col-md-6">
                        <TodosDone />
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
