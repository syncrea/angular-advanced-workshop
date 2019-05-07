import {TodoItem} from '../../model/todo';

export interface TodoState {
  todoItems: TodoItem[];
}

export const initialTodoState: TodoState = {
  todoItems: [{
    id: 1,
    title: 'Hello World',
    description: 'Whatever',
    done: false
  }]
};
