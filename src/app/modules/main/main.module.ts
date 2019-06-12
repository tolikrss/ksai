import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './components/main-view/main-view.component';
import { MainRoutingModule } from './main-routing.module';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { OneUserModalComponent } from './components/one-user-modal/one-user-modal.component';
import {MatDialogModule} from '@angular/material';
import {UsersService} from './services/users.service';

@NgModule( {
  declarations: [
    MainViewComponent,
    MainContainerComponent,
    NewUserFormComponent,
    UsersTableComponent,
    OneUserModalComponent,
  ],
  entryComponents: [
    OneUserModalComponent,
  ],
  providers: [
    UsersService,
  ],
  imports: [
    CommonModule,
    QRCodeModule,

    MatDialogModule,

    MainRoutingModule,

  ]
} )
export class MainModule {
}
