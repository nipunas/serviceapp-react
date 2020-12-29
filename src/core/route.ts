import React from 'react';
import TodoList from '../components/playground/Todos/TodoList';

const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: TodoList },
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: TodoList }
];

export default route;