import { Injectable } from '@angular/core';
import {QrCodeService} from '../../../services/qr-code.service';
import {UserModel} from '../models/user.model';

@Injectable()
export class UsersService {

  constructor(
    private qrCode: QrCodeService,
  ) { }

  addNewUser(userData: UserModel) {

  }

  deleteUser(): UserModel {
    return null;
  }
}
