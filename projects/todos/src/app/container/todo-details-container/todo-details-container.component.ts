import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';
import {Observable} from 'rxjs';
import {switchMap, take} from 'rxjs/operators';

@Component({
  selector: 'app-todo-details-container',
  templateUrl: './todo-details-container.component.html',
  styleUrls: ['./todo-details-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailsContainerComponent {
  todoItem: Observable<TodoItem>;

  constructor(private todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute) {
    this.todoItem = route.params
      .pipe(
        switchMap(params => todoService.loadTodo(params.id))
      );
  }

  updateTodo(data: Partial<TodoItem>) {
    this.route.params
      .pipe(
        take(1),
        switchMap((params) => this.todoService.updateTodo(params.id, data))
      )
      .subscribe(() => this.router.navigate(['/todos']));
  }
}
