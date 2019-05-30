import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './components/main-view/main-view.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainViewComponent],
  imports: [
    CommonModule,
    
    MainRoutingModule,
  ]
})
export class MainModule { }
