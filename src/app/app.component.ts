import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PdfService } from './pdf.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
  console.log(this.file); 
  console.log(this.file.size); 
 
} 

onChange(event: any){
  this.file = event.target.files[0]; 
  this.fileSize = this.file.size;
  return this.fileSize;

}

submitApplication(){
  this.pdfService.submitApplication(
    this.applyForm.value.fileInput ??  ''
  )
}
}

  


