import { createAction, props } from '@ngrx/store';
// import { User } from '../entity';

export const GET_USER = '[Get User] User';
export const GET_USER_SUCCESS = '[Get User Success] getUser Sucess';
export const GET_USER_FAILURE = '[Get User Failure] getLogin Failure';

export const getUsers = createAction(
  GET_USER,
);

export const getUsersSuccess = createAction(
  GET_USER_SUCCESS,
  props<any>()
)

export const getUserFailure = createAction(
  GET_USER_FAILURE,
  props<{message: string}>()
)
