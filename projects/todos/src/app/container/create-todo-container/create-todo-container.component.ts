import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-create-todo-container',
  templateUrl: './create-todo-container.component.html',
  styleUrls: ['./create-todo-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTodoContainerComponent {
  constructor(private todoService: TodoService,
              private router: Router) {}

  createTodo(title: string, description: string) {
    this.todoService.createTodo(title, description)
      .pipe(take(1))
      .subscribe(() => this.router.navigate(['/todos']));
  }
}
