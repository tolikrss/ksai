import { Injectable } from '@angular/core';
import QRCode from 'qrcodejs/qrcode';
import * as qrCode from 'qrcode';
import { reject } from 'q';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import jsQR from "jsqr";

@Injectable( {
  providedIn: 'root'
} )
export class QrCodeService {

  private readonly _readQRApi: string = 'http://api.qrserver.com/v1/read-qr-code/';

  constructor(
    private _http: HttpClient,
  ) {
    this.generate( 'test' );
  }

  /**
   * @param info
   *
   * @return {Promise<string>} - Base64 string of QRCode image
   */
  async generate( info: any ): Promise<string> {
    const dataToCode: string = JSON.stringify( info );

    const result = await qrCode.toDataURL( dataToCode );

    return result;
  }

  async parse( imageFile: File ): Promise<any> {
    const base64Img = await this.fileToBase64( imageFile );

    const imageData = await new Promise( resolve => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0 );
        const _myData = context.getImageData(0, 0, img.width, img.height);
        resolve( _myData );
      };
      img.src = base64Img;
    });
    const temp = jsQR( imageData.data, imageData.width, imageData.height );
    const result = JSON.parse(temp.data);
    // debugger;

    return result;

  }

  private _getDataUri( url ): Promise<string> {
    return new Promise<any>( ( resolve, reject ) => {
      try {
        const image = new Image();

        image.onload = function () {
          const canvas = document.createElement( 'canvas' ) as any;

          canvas.width = (<any>this).naturalWidth;
          canvas.height = (<any>this).naturalHeight;
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

  fileToBase64( file: File ): Promise<string> {
    return new Promise( ( resolve, reject ) => {
      const reader = new FileReader();
      reader.readAsDataURL( file );
      reader.onload = () => resolve( reader.result as string );
      reader.onerror = error => reject( error );
    } );
  }
}
