import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';
import {take} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {CreateTodoAction} from '../../state/todo/todo.actions';

@Component({
  selector: 'app-create-todo-container',
  templateUrl: './create-todo-container.component.html',
  styleUrls: ['./create-todo-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTodoContainerComponent {
  constructor(private todoService: TodoService,
              private router: Router,
              private store: Store<AppState>) {}

  createTodo(title: string, description: string) {
    this.store.dispatch(new CreateTodoAction(title, description));
    this.router.navigate(['/todos']);
  }
}
