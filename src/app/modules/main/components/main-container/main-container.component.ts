import { Component, OnInit } from '@angular/core';
import { QrCodeService } from '../../../../services/qr-code.service';
import {OneUserModalComponent} from '../one-user-modal/one-user-modal.component';
import {MatDialog} from '@angular/material';

export interface DialogData {
  [ key: string ]: any;
}

@Component( {
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: [ './main-container.component.sass' ]
} )
export class MainContainerComponent implements OnInit {
  public readonly displayedColumns: string[] = ['title'];
  public readonly qrCodeLevel: string = 'M';

  public readonly qrCodeSize: number = 256;

  public qrData: any = { date: 'test' };

  constructor(
    private _qrCode: QrCodeService,
    private _matDialog: MatDialog,
  ) {
  }

  ngOnInit() {
  }

  /**
   * Component Methods
   */

  openDialog(): void {
    const dialogRef = this._matDialog.open(OneUserModalComponent, {
      width: '550px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async onChange( evt: any ) {
    const file: File = evt.target.files[ 0 ];

    const result = await this._qrCode.parse( file );
    debugger;
  }

}
