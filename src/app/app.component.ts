import { Component } from '@angular/core';
import { QrCodeService } from './services/qr-code.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'ksai';

  constructor(
    private _qrCode: QrCodeService,
  ) {
  }
}
