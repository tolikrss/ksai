import {Injectable} from '@angular/core';
import {QrCodeService} from '../../../services/qr-code.service';
import {UserModel} from '../models/user.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


function guid(): string {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
const _startId = 1123450;
const testUser = {
  id: _startId,
  firstName: 'Anatoliy',
  lastName: 'Lakhno',
  age: 23,
  faculty: 'FPM',
};

const storageUsersKey = 'ksai_lab_users';

@Injectable()
export class UsersService {

  private _usersList$: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>([testUser]);
  public usersList$: Observable<UserModel[]> = this._usersList$.asObservable();

  private get users(): UserModel[] {
    return this.cloneObj(this._usersList$.value);
  }

  constructor(
    private qrCode: QrCodeService,
  ) {
    const usersFromLocalStorage = JSON.parse(window.localStorage.getItem(storageUsersKey));
    if (usersFromLocalStorage && Array.isArray(usersFromLocalStorage)) {
      this._usersList$.next(usersFromLocalStorage);
    }

    this.usersList$
      .pipe(
        tap(res => {
          window.localStorage.setItem(storageUsersKey, JSON.stringify(res));
        })
      )
      .subscribe();
  }

  addNewUser(userData: UserModel) {
    userData.id = Array.isArray(this._usersList$.value) && this._usersList$.value[0]
      ? this._usersList$.value[0].id + 1 
      : _startId;

    this._usersList$.next([...this.users, userData]);
  }

  deleteUser(id: string | number): void {
    this._usersList$.next(this.users.filter(u => u.id !== id));
  }

  cloneObj<T extends object>(target: T): T {
    return JSON.parse(JSON.stringify(target));
  }
}
