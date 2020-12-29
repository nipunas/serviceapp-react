import React from 'react';
import {connect } from 'react-redux';
import { getTodosByVisibilityFilter } from '../../../core/store/selectors';

const TodoList = ({ todos }) => (
    <ul className = "todo-list">
        { todos && todos.length ? 
            todos.map((todo, index) => {
                return <div key={`todo-${todo.id}`}>{todo.content}</div>;
            })
            : "No todos, yay!"
        }
    </ul>
);

const mapStateToProps = state => {
    const todos = getTodosByVisibilityFilter(state, 1);
    return { todos };
}

export default connect(mapStateToProps)(TodoList);