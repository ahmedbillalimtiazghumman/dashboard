import { localStorageSync } from 'ngrx-store-localstorage';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './reducers/user.reducer';
// import * as fromTodo from './reducers/todo.reducer';

export interface State {
  user: fromUser.State;
  // todo: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
};

const reducerKeys = ['user'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [debug, localStorageSyncReducer]
  : [localStorageSyncReducer];

export const getUsers = createFeatureSelector<fromUser.State>('user');

export const getUsersSelector = createSelector(getUsers, fromUser.getUser);

// export const userLogin = createSelector(
//   getLoginState,
//   fromUser.userLogin
// );

// export const userSignup = createSelector(
//   getLoginState,
//   fromUser.userSignup
// );

// // Todo reducers Begin

// export const geTodoState = createFeatureSelector<fromTodo.State>('todo');

// export const getTasks = createSelector(
//   geTodoState,
//   fromTodo.getTasks
// );
