import {Component, OnInit} from '@angular/core';
import {QrCodeService} from '../../../../services/qr-code.service';
import {OneUserModalComponent} from '../one-user-modal/one-user-modal.component';
import {MatDialog} from '@angular/material';
import {UserModel} from '../../models/user.model';
import {Observable} from 'rxjs';
import {UsersService} from '../../services/users.service';

export interface DialogData {
  user: UserModel;
}

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.sass']
})
export class MainContainerComponent implements OnInit {
  public readonly users$: Observable<UserModel[]>;

  constructor(
    private _qrCode: QrCodeService,
    private _matDialog: MatDialog,
    private _users: UsersService,
  ) {
    this.users$ = this._users.usersList$;
  }

  ngOnInit() {
  }

  /**
   * Component Methods
   */
  async onChange(evt: any) {
    const file: File = evt.target.files[0];

    const result = await this._qrCode.parse(file);

    this._users.addNewUser(result as UserModel);

    evt.target.value = null;
    // debugger;
  }

}
