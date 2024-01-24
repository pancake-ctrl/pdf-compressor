import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  submitApplication(fileInput: any){

    console.log(fileInput)
  }
  
  getPdf(){}
  
}
