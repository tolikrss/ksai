import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor() {
  }

  ngOnInit() {
  }

  save() {
    // TODO
  }

}
