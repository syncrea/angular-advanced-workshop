import {initialTodoState, TodoState} from './todo.state';
import {Action} from '@ngrx/store';

export function todoReducer(state: TodoState = initialTodoState, action: Action): TodoState {
  switch (action.type) {
    default: return state;
  }
}
