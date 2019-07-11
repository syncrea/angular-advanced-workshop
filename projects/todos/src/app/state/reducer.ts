import {ActionReducerMap} from '@ngrx/store';
import {GlobalState} from './state';
import {todoReducer} from './todo/todo.reducer';

export const reducers: ActionReducerMap<GlobalState> = {
  todo: todoReducer
};
