import {initialTodoState, TodoState} from './todo/todo.state';

export interface GlobalState {
  todo: TodoState;
}

export const initialGlobalState: GlobalState = {
  todo: initialTodoState
};
