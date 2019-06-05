import { Injectable } from '@angular/core';
<<<<<<< HEAD
import QRCode from 'qrcodejs/qrcode';
=======
import * as qrCode from 'qrcode';
import qrCodeReader from 'qrcode-reader';
import { reject } from 'q';
>>>>>>> 07bd8a7829786c66ac5f4704fdd4e7d73d364970

@Injectable( {
  providedIn: 'root'
} )
export class QrCodeService {

  constructor() {
    this.generate( 'test' );
  }

  /**
   * @param info
   *
   * @return {Promise<string>} - Base64 string of QRCode image
   */
  async generate( info: any ): Promise<string> {
    const dataToCode: string = JSON.stringify( info );

<<<<<<< HEAD
    const temp = QRCode;
    debugger;

    const result = QRCode.makeCode(dataToCode);
=======
    const result = await qrCode.toDataURL( dataToCode );

    return result;
  }
>>>>>>> 07bd8a7829786c66ac5f4704fdd4e7d73d364970

  parse( imageFile: File | string ): Promise<string> {
    const imageDataURi = typeof imageFile === 'string'
      ? imageFile
      : this._getDataUri( imageFile );

    return new Promise( ( resolve, reject ) => {
      const qr = new qrCodeReader();

      qr.decode( imageDataURi );

      qr.callback = function ( err, res ) {
        if ( err ) {
          reject( err );
        } else {
          resolve( res );
        }
      }
    } );
  }

  private _getDataUri( url ): Promise<string> {
    return new Promise<any>( ( resolve, reject ) => {
      try {
        const image = new Image();

        image.onload = function () {
          const canvas = document.createElement( 'canvas' );

          canvas.width = this.naturalWidth;
          canvas.height = this.naturalHeight;
          canvas.getContext( '2d' ).drawImage( this, 0, 0 );

          const result = canvas.toDataURL( 'image/png' );

          resolve( result );
        };

        image.src = url;
      } catch ( err ) {
        reject( 'Can\'t get image DataURI' );
      }
    } );
  }
}
