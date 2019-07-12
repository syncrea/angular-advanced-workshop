import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {GlobalState} from '../../state/state';
import {CreateTodoAction} from '../../state/todo/todo.action';

@Component({
  selector: 'app-create-todo-container',
  templateUrl: './create-todo-container.component.html',
  styleUrls: ['./create-todo-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTodoContainerComponent {
  constructor(private store: Store<GlobalState>,
              private router: Router) {}

  createTodo(title: string, description: string) {
    this.store.dispatch(new CreateTodoAction(title, description));
    this.router.navigate(['/todos']);
  }
}
