import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, filter, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CreateTodoAction, CreateTodoFailedAction, CreateTodoSuccessAction} from './todo.action';
import {TodoService} from '../../service/todo.service';

@Injectable()
export class TodoEffect {
  @Effect() createTodo = this.actions.pipe(
    filter(action => action instanceof CreateTodoAction),
    mergeMap((action: CreateTodoAction) =>
      this.todoService.createTodo(action.title, action.description)
        .pipe(
          map(item => new CreateTodoSuccessAction(item)),
          catchError(() => of(new CreateTodoFailedAction()))
        )
    ));

  constructor(private actions: Actions,
              private todoService: TodoService) {
  }
}
