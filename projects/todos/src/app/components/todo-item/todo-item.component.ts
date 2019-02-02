import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input() todoItem: TodoItem;
  @Output() outToggleDone = new EventEmitter<TodoItem>();
  @Output() outShowDetails = new EventEmitter<TodoItem>();

  toggleDone() {
    this.outToggleDone.emit(this.todoItem);
  }

  @HostListener('click')
  showDetails() {
    this.outShowDetails.emit(this.todoItem);
  }
}
