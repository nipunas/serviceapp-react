import { ADD_TODO } from "./actionTypes";

export const COLLAPSE_MENU = 'COLLAPSE_MENU';
export const COLLAPSE_TOGGLE = 'COLLAPSE_TOGGLE';
export const FULL_SCREEN = 'FULL_SCREEN';
export const FULL_SCREEN_EXIT = 'FULL_SCREEN_EXIT';
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const NAV_CONTENT_LEAVE = 'NAV_CONTENT_LEAVE';
export const NAV_COLLAPSE_LEAVE = 'NAV_COLLAPSE_LEAVE';

let nextTodoId = 0;

export const addTodo = (content: any) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});
