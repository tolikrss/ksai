import { Injectable } from '@angular/core';
import QRCode from 'qrcodejs/qrcode';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor() { 
    this.generate('test');
  }

  generate(info: any) {
    const dataToCode: string = JSON.stringify(info);

    const temp = QRCode;
    debugger;

    const result = QRCode.makeCode(dataToCode);

    debugger; // temp

    return result;
  }

  parse(imageFile: File): string {
    return null;
  }
}
