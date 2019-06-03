import { Component, OnInit } from '@angular/core';
import { QrCodeService } from '../../../../services/qr-code.service';

@Component( {
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: [ './main-container.component.sass' ]
} )
export class MainContainerComponent implements OnInit {

  public readonly qrCodeLevel: string = 'M';

  public readonly qrCodeSize: number = 256;

  public qrData: any = { date: 'test' };

  constructor(
    private _qrCode: QrCodeService,
  ) {
  }

  ngOnInit() {
  }

  async onChange( evt: any ) {
    const file: File = evt.target.files[ 0 ];

    const result = await this._qrCode.parse( file );
    debugger;
  }

}
