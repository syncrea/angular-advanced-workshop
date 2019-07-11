import {initialTodoState, TodoState} from './todo.state';
import {TodoAction} from './todo.action';

export function todoReducer(state: TodoState = initialTodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'CreateTodoAction': {
      return {
        ...state,
        items: [
          {
            id: 1,
            title: action.title,
            description: action.description,
            done: false
          },
          ...state.items
        ]
      };
    }

    default: return state;
  }
}
