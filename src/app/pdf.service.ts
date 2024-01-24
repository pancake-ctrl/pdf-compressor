import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  loading: boolean = false;

  serverUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  submitApplication(fileInput: any){
    console.log(fileInput)
  }
  
  sendPDF(){
  
    
   
  } 
  
}
