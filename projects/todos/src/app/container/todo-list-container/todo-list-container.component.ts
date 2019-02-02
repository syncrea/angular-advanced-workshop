import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListContainerComponent {
  todoItems: Observable<TodoItem[]>;

  constructor(private todoService: TodoService,
              private router: Router) {
    this.todoItems = todoService.loadTodos();
  }

  toggleDone(todoItem: TodoItem) {
    this.todoItems = this.todoService.updateTodo(todoItem.id, {
      done: !todoItem.done,
      title: todoItem.title,
      description: todoItem.description
    }).pipe(
      switchMap(() => this.todoService.loadTodos())
    );
  }

  showDetails(todoItem: TodoItem) {
    this.router.navigate(['/todos', todoItem.id]);
  }
}
