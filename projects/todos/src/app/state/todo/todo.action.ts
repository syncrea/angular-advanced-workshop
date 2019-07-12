import {Action} from '@ngrx/store';
import {TodoItem} from '../../model/todo';

export class CreateTodoAction implements Action {
  readonly type = 'CreateTodoAction';

  constructor(public readonly title: string,
              public readonly description: string) {

  }
}

export class CreateTodoSuccessAction implements Action {
  readonly type = 'CreateTodoSuccessAction';

  constructor(public readonly todoItem: TodoItem) {

  }
}

export class CreateTodoFailedAction implements Action {
  readonly type = 'CreateTodoFailedAction';
}

export type TodoAction =
  CreateTodoAction |
  CreateTodoSuccessAction |
  CreateTodoFailedAction;
