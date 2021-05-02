import { UserService } from './../../serives/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as userActions from '../actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getUsers),
      exhaustMap((action) =>
        this.userService.getAllUsers().pipe(
          map((response) => userActions.getUsersSuccess(response)),
          catchError((error: any) => of(userActions.getUserFailure(error)))
        )
      )
    )
  );

  // userSignup$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(userActions.signup),
  //     exhaustMap(action =>
  //       this.appService.signup(action.user).pipe(
  //         map(response => userActions.signupSuccess(response)),
  //         catchError((error: any) => of(userActions.signupFailure(error))))
  //     )
  //   )
  // );
}
