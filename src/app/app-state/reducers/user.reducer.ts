import { Action, createReducer, on } from '@ngrx/store';
// import { User } from '../entity';
import * as userActions from '../actions';
import * as storage from '../state/storage';

export interface State {
  user: any;
  result: any;
}

export const initialState: State = {
  user: storage.getItem('user').user,
  result: '',
};

const getUsers = createReducer(
  initialState,
  on(userActions.getUsers , (state) => ({...state})),
  on(userActions.getUsersSuccess, (state, result) => ({user: result, result})),
);

export function reducer(state: State | undefined, action: Action): any {
  return getUsers(state, action);
}

export const getUser = (state: State) => {
  return {
    user: state.user,
    // isLoadingSuccess: state
  }
};

// export const userLogin = (state: State) => {
//   return {
//     user: state.user,
//     result: state.result,
//   }
// };