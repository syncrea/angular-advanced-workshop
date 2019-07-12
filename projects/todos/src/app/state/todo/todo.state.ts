import {TodoItem} from '../../model/todo';

export interface TodoState {
  items: TodoItem[];
  loading: boolean;
}

export const initialTodoState: TodoState = {
  items: [],
  loading: false
};

