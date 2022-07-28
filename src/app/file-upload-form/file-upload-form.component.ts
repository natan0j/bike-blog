import { url } from 'inspector';


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { FileUpload } from '../file.model';

@Component({
  selector: 'app-file-upload-form',
  templateUrl: './file-upload-form.component.html',
  styleUrls: ['./file-upload-form.component.css']
})
export class FileUploadFormComponent implements OnInit {

selectedFiles?: FileList;
currentFileUpload?: FileUpload;
percentage: number;
  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }
selectFile(event: any): void{
  this.selectedFiles = event.target.files;
}
upload(): void {
  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    if (file) {
      this.currentFileUpload = new FileUpload(file);
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
        percentage => {
          this.percentage = Math.round(percentage ? percentage : 0);
        },
        error => {
          console.log(error);
        }
      );
    }


  }
}
}
