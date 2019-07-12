import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

/*

unknown
jk@1:1193794
handleError@1:1194098
jk@1:1193794
handleError@1:1194098
1:1178995
error@1:3792
_error@1:382013
error@1:5008
_error@1:382013
error@1:5008
s@1:1176544
onInvokeTask@1:162381
runTask@1:147038
invokeTask@1:152530
y@1:164506
b@1:164743


 */

import {AppComponent} from './app.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoDetailsComponent} from './components/todo-details/todo-details.component';
import {TodoListContainerComponent} from './container/todo-list-container/todo-list-container.component';
import {TodoDetailsContainerComponent} from './container/todo-details-container/todo-details-container.component';
import {TodoService} from './service/todo.service';
import {RouterModule} from '@angular/router';
import {CreateTodoContainerComponent} from './container/create-todo-container/create-todo-container.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TodoDb} from './todo.db';
import {StoreModule} from '@ngrx/store';
import {reducers} from './state/reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffect} from './state/todo/todo.effect';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoListContainerComponent,
    TodoDetailsContainerComponent,
    CreateTodoContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TodoDb, {
      delay: 5000
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      TodoEffect
    ]),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot([{
      path: 'todos',
      component: TodoListContainerComponent
    }, {
      path: 'todos/:id',
      component: TodoDetailsContainerComponent
    }, {
      path: 'create-todo',
      component: CreateTodoContainerComponent
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: '/todos'
    }])
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
