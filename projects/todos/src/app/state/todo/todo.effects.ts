import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {filter, map, switchMap} from 'rxjs/operators';
import {CreateTodoAction, CreateTodoSuccessAction} from './todo.actions';
import {TodoService} from '../../service/todo.service';

@Injectable()
export class TodoEffects {
  @Effect() createTodo = this.actions
    .pipe(
      filter(action => action instanceof CreateTodoAction),
      switchMap((action: CreateTodoAction) =>
        this.todoService.createTodo(action.title, action.description)
          .pipe(
            map(item => new CreateTodoSuccessAction(item))
          )
      )
    );

  constructor(private actions: Actions, private todoService: TodoService) {

  }
}
