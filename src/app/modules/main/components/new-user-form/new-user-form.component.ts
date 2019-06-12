import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.sass']
})
export class NewUserFormComponent implements OnInit {
  public filtersFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    faculty: new FormControl('', Validators.required),
  });

  constructor(
    private _users: UsersService,
  ) {
  }

  ngOnInit() {
  }

  save() {
    this._users.addNewUser({
      firstName: this.filtersFormGroup.controls.firstName.value,
      lastName: this.filtersFormGroup.controls.lastName.value,
      age: this.filtersFormGroup.controls.age.value,
      faculty: this.filtersFormGroup.controls.faculty.value,
    });
  }

}
