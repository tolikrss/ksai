import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {MatDialog} from '@angular/material';
import {OneUserModalComponent} from '../one-user-modal/one-user-modal.component';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass']
})
export class UsersTableComponent implements OnInit {
  public readonly displayedColumns: string[] = ['firstName', 'lastName', 'age', 'faculty', 'controls'];

  @Input() users: UserModel[];

  constructor(
    private _matDialog: MatDialog,
    private _usersService: UsersService,
  ) {
  }

  ngOnInit() {
  }

  deleteUser(id: string) {
    this._usersService.deleteUser(id);
  }

  openUserModal(user: UserModel) {
    const dialogRef = this._matDialog.open(OneUserModalComponent, {
      width: '550px',
      data: {
        user,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
