import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass']
})
export class UsersTableComponent implements OnInit {
  public readonly displayedColumns: string[] = ['title'];

  @Input() users: UserModel[];

  constructor() { }

  ngOnInit() {
  }

}
