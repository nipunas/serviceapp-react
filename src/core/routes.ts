import largeForm from "../components/playground/large-form";
import largeForm2 from "../components/playground/large-form2";
import TodoList from "../components/playground/Todos/TodoList";
import vendors from "../components/core/vendors/list";
import { AddCard } from "../components/core/tasks/add";
import { TasksList } from "../components/core/tasks/list";
import { DndContainer } from "../components/playground/dnd/dnd-one";
import { TaskBoard } from "../components/core/task-board/Index";
import { CanvasHolder } from "../components/playground/canvas/Index";
import { TaskBoard2 } from "../components/core/task-board2/Index";
import { Catalog } from "../components/core/catalog";
import { Inventory } from "../components/core/inventory";

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: TodoList },
    { path: '/dashboard/default2', exact: true, name: 'Default', component: largeForm },
    { path: '/dashboard/default3', exact: true, name: 'Default', component: largeForm2 },
    { path: '/dashboard/default4', exact: true, name: 'Default', component: vendors },
    { path: '/tasks', exact: true, name: 'Default', component: TasksList },
    { path: '/task-board', exact: true, name: 'Default', component: TaskBoard },
    { path: '/task-board2', exact: true, name: 'Default', component: TaskBoard2 },
    { path: '/tasks/add', exact: true, name: 'Default', component: AddCard },

    { path: '/catalog', exact: true, name: 'Default 2', component: Catalog },
    { path: '/inventory', exact: true, name: 'Default 2', component: Inventory },

    { path: '/playground/dnd', exact: true, name: 'Default', component: DndContainer },
    { path: '/playground/canvas', exact: true, name: 'Default', component: CanvasHolder }
];

export default routes;