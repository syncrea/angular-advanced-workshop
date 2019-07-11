import {Action} from '@ngrx/store';

export class CreateTodoAction implements Action {
  readonly type = 'CreateTodoAction';

  constructor(public readonly title: string,
              public readonly description: string) {

  }
}

export type TodoAction = CreateTodoAction;
