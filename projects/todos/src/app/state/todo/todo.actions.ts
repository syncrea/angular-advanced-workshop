import {Action} from '@ngrx/store';
import {TodoItem} from '../../model/todo';

export class CreateTodoAction implements Action {
  readonly type = 'CreateTodoAction';
  constructor(public readonly title: string, public readonly description: string) {

  }
}

export class CreateTodoSuccessAction implements Action {
  readonly type = 'CreateTodoSuccessAction';
  constructor(public readonly item: TodoItem) {

  }
}

export type TodoActions =
  CreateTodoAction |
  CreateTodoSuccessAction;
