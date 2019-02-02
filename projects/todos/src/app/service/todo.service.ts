import {Inject, Injectable} from '@angular/core';
import {TodoItem} from '../model/todo';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TodoService {
  loadTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('/api/todos');
  }

  loadTodo(id: number): Observable<TodoItem> {
    return this.http.get<TodoItem>(`/api/todos/${id}`);
  }

  createTodo(title: string, description: string): Observable<TodoItem> {
    return this.http.post<TodoItem>('/api/todos', {
      title,
      description,
      done: false
    });
  }

  updateTodo(id: number, data: Partial<TodoItem>): Observable<TodoItem> {
    return this.http.post<TodoItem>(`/api/todos/${id}`, data);
  }

  constructor(@Inject(HttpClient) private http: HttpClient) {}
}
