import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailsComponent {
  @Input() todoItem: TodoItem;
  @Input() applyButtonText: string;
  @Output() outApplyChanges = new EventEmitter<Partial<TodoItem>>();

  applyChanges(title: string, description: string, done: boolean) {
    this.outApplyChanges.emit({
      title,
      description,
      done
    });
  }
}
