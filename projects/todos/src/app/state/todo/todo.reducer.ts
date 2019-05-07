import {initialTodoState, TodoState} from './todo.state';
import {TodoActions} from './todo.actions';

export function todoReducer(state: TodoState = initialTodoState, action: TodoActions): TodoState {
  switch (action.type) {
    case 'CreateTodoAction': {
      return {
        ...state,
        todoItems: [{
          id: 0,
          done: false,
          title: action.title,
          description: action.description
        },
          ...state.todoItems
        ]
      };
    }
    default: return state;
  }
}
