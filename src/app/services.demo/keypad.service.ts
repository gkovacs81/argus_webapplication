import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { AuthenticationService } from './authentication.service';
import { environment, KEYPADS, KEYPAD_TYPES } from '../../environments/environment';
import { Keypad, KeypadType } from '../models';

@Injectable()
export class KeypadService {

  keypad: Keypad = KEYPADS[0];
  keypadTypes: KeypadType[] = KEYPAD_TYPES;

  constructor(
    private authService: AuthenticationService
  ) { }

  getKeypads(): Observable<Keypad[]> {
    return of(Object.assign([], [this.keypad]))
      .pipe(
        delay(environment.delay),
        map(_ => {
          this.authService.updateUserToken('user.session');
          return _;
        })
      );
  }


  getKeypad( keypadId: number ): Observable<Keypad> {
    return of(Object.assign([], this.keypad))
      .pipe(
        delay(environment.delay),
        map(_ => {
          this.authService.updateUserToken('user.session');
          return _;
        })
      );
  }


  createKeypad( keypad: Keypad ): Observable<Keypad> {
    this.keypad = keypad;
    return of(Object.assign([], this.keypad))
      .pipe(
        delay(environment.delay),
        map(_ => {
          this.authService.updateUserToken('user.session');
          return _;
        })
      );
  }


  updateKeypad( keypad: Keypad ): Observable<Keypad> {
    this.keypad = keypad;
    return of(Object.assign([], this.keypad))
      .pipe(
        delay(environment.delay),
        map(_ => {
          this.authService.updateUserToken('user.session');
          return _;
        })
      );
  }

  deleteKeypad( keypadId: number ): Observable<boolean> {
    this.keypad = null;
    return of(Object.assign([], true))
      .pipe(
        delay(environment.delay),
        map(_ => {
          this.authService.updateUserToken('user.session');
          return _;
        })
      );
  }

  getKeypadTypes(): Observable<KeypadType[]> {
    return of(Object.assign([], this.keypadTypes))
      .pipe(
        delay(environment.delay),
        map(_ => {
          this.authService.updateUserToken('user.session');
          return _;
        })
      );
  }
}


