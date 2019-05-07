import {initialTodoState, TodoState} from './todo.state';
import {TodoActions} from './todo.actions';

export function todoReducer(state: TodoState = initialTodoState, action: TodoActions): TodoState {
  switch (action.type) {
    case 'CreateTodoSuccessAction': {
      return {
        ...state,
        todoItems: [
          action.item,
          ...state.todoItems
        ]
      };
    }
    default: return state;
  }
}
