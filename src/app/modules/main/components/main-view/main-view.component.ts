import { Component, OnInit } from '@angular/core';
import { QrCodeService } from './../../../../services/qr-code.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.sass']
})
export class MainViewComponent implements OnInit {

  constructor(
    private _qrCode: QrCodeService,
  ) { }

  ngOnInit() {
  }

}
