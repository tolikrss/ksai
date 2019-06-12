import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from '../main-container/main-container.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-one-user-modal',
  templateUrl: './one-user-modal.component.html',
  styleUrls: ['./one-user-modal.component.sass']
})
export class OneUserModalComponent implements OnInit {

  public qrData: UserModel;
  public readonly qrCodeLevel: string = 'M';

  public readonly qrCodeSize: number = 256;

  constructor(
    public dialogRef: MatDialogRef<OneUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.qrData = data.user;
  }

  ngOnInit() {
  }

}
