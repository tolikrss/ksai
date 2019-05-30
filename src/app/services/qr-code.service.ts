import { Injectable } from '@angular/core';
import * as qrCodeJS from 'qrcodejs';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor() { 
    this.generate('test');
  }

  generate(info: any) {
    const dataToCode: string = JSON.stringify(info);

    const temp = qrCodeJS;
    debugger;

    const result = qrCodeJS.makeCode(dataToCode);

    debugger; // temp

    return result;
  }

  parse(imageFile: File): string {

  }
}
