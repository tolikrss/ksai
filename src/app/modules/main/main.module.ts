import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './components/main-view/main-view.component';
import { MainRoutingModule } from './main-routing.module';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule( {
  declarations: [
    MainViewComponent,
    MainContainerComponent,
  ],
  imports: [
    CommonModule,
    QRCodeModule,

    MainRoutingModule,

  ]
} )
export class MainModule {
}
