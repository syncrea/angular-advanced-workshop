import {TodoItem} from '../../model/todo';

export interface TodoState {
  items: TodoItem[];
}

export const initialTodoState: TodoState = {
  items: []
};

