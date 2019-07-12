import {initialTodoState, TodoState} from './todo.state';
import {TodoAction} from './todo.action';

export function todoReducer(state: TodoState = initialTodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'CreateTodoSuccessAction': {
      return {
        ...state,
        loading: false,
        items: [
          action.todoItem,
          ...state.items
        ]
      };
    }

    case 'CreateTodoAction': {
      return {
        ...state,
        loading: true
      };
    }

    default: return state;
  }
}
