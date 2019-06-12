import {Injectable} from '@angular/core';
import {QrCodeService} from '../../../services/qr-code.service';
import {UserModel} from '../models/user.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class UsersService {

  private _usersList$: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>([]);
  public usersList$: Observable<UserModel[]> = this._usersList$.asObservable();

  private get users(): UserModel[] {
    return this.cloneObj(this._usersList$.value);
  }

  constructor(
    private qrCode: QrCodeService,
  ) {
  }

  addNewUser(userData: UserModel) {
    userData.id = this.guid();

    this._usersList$.next(this.users.push(userData));
  }

  deleteUser(id: string | number): void {
    this._usersList$.next(this.users.filter(u => u.id !== id));
  }

  guid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  cloneObj<T extends object>(target: T): T {
    return JSON.parse(JSON.stringify(target));
  }
}
