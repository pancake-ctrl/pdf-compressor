import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PdfService } from './pdf.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit  {
  shortLink: string = ""; 
  file!: File
  fileSize!: number;
  loading: boolean = false;
  applyForm = new FormGroup (
    {fileInput: new FormControl('')}
  )
  pdfService = inject(PdfService);

ngOnInit(): void {
    
}

constructor(){}

onUpload(){
  
  this.loading = !this.loading;
} 

onChange(event: any){
  
  this.file = event.target.files[0]; 
  this.fileSize = this.file.size;
  console.log(this.file);
  console.log(this.fileSize)
  return this.fileSize;

}

submitApplication(){
  this.pdfService.submitApplication(
    this.applyForm.value.fileInput ??  ''
  )
}
}

  


