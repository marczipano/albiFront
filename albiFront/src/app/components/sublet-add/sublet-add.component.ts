import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sublet } from '@models/sublet';
import { SubletService } from '@services/sublet.service';
import { FormsModule }   from '@angular/forms';
import { TokenStorageService } from '@services/token-storage.service';
import { FileUploadService } from '@services/file-upload.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sublet-add',
  templateUrl: './sublet-add.component.html',
  styleUrls: ['./sublet-add.component.css']
})



export class SubletAddComponent implements OnInit {

  sublet: Sublet;
  currentUser: any;
  selectedFiles?: FileList;
  message: string[] = [];
  fileInfos?: Observable<any>;

  id: number;

  imageNames: string[] = [];

  fileName = '';

  errorMsg = '';

  constructor(private route: ActivatedRoute, 
      private router: Router, 
      private subletService: SubletService,
      private token: TokenStorageService,
      private uploadService: FileUploadService) { }

  ngOnInit(): void {
      this.currentUser = this.token.getUser();
      if(!this.currentUser.id){
        this.router.navigate(['/login/']);  
      }
      this.fileInfos = this.uploadService.getFiles();
  }

  onSubmit(data: any){
    this.subletService.addSublets({"id" : 0, "sellerId" : this.currentUser.id, "address" : data.address, "size" : data.size, "garden" : data.garden, "rooms" : data.rooms, "desc" : data.desc, "price": data.price})
      .subscribe(
        (response: Sublet) => {
		        this.id = response.id;
            this.addImagesToSublet();
	    },
	    (error: HttpErrorResponse) => {
		    this.errorMsg = error.message;
	    }
      );
   }

   addImagesToSublet(): void{
    this.subletService.addImagesToSublet(this.id, this.imageNames)
      .subscribe(
        (result) => this.gotoList()

      );
   }

  gotoList(){
    this.router.navigate(['/home/']);    
  }

   selectFiles(event: any): void {
    this.message = [];
    this.selectedFiles = event.target.files;
    }

  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload2(i, this.selectedFiles[i]);
      }
    }
  }

  upload2(idx: number, file: File): void{
      if (file) {
        this.uploadService.upload2(file).subscribe(
            (response: string) => {
		          this.imageNames.push(response);
	          },
	          (error: HttpErrorResponse) => {
		          this.errorMsg = error.message;
	          }
        );
      }
  }
}
