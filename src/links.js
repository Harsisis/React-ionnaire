import TicTacToe from './01-tic-tac-toe';
import TodoList from './02-todo-list';
import Accordion from './03-accordion';
import ColorViewer from './04-color-viewer';
import DarkMode from './06-dark-mode';

export default [
  {
    path: '01-tic-tac-toe',
    component: TicTacToe,
  },
  {
    path: '02-todo-list',
    component: TodoList,
  },
  {
    path: '03-accordion',
    component: Accordion,
  },
  {
    path: '04-color-viewer',
    component: ColorViewer,
  },
  {
    path: '06-dark-mode',
    component: DarkMode,
  },
];
