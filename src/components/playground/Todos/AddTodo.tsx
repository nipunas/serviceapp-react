import React from 'react';
import { connect } from "react-redux";
import { addTodo } from "../../../core/store/actions";


class AddTodo extends React.Component<any, any> {
    constructor(props){
        super(props);
        this.state = { input : ""};
    }

    updateInput = (input: any) => {
        this.setState({input});
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({input: ""});
    }

    render() {
        return (
            <div>
                <input 
                    onChange= { e => this.updateInput(e.target.value)}
                    value = {this.state.input}
                    />
                <button className="add-todo" onClick= {this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        )
    }


}

// HINT: Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch.
// It lets you provide action dispatching functions as props. Therefore, instead of calling props.dispatch(() => increment()), 
// you may call props.increment() directly. There are a few reasons why you might want to do that.

const mapDispatchToProps = {
    addTodo
  }

export default connect(null, mapDispatchToProps)(AddTodo);