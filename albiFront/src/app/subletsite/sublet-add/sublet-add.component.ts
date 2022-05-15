import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sublet } from '../../sublet';
import { SubletService } from '../../sublet.service';
import { FormsModule }   from '@angular/forms';
import { TokenStorageService } from '../../token-storage.service';
import { FileUploadService } from '../../file-upload.service';
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
  progressInfos: any[] = [];
  message: string[] = [];
  fileInfos?: Observable<any>;

  id: number;

  imageNames: string[] = [];

  fileName = '';
    //uploadProgress:number;
    //uploadSub: Subscription;

  constructor(private route: ActivatedRoute, 
      private router: Router, 
      private subletService: SubletService,
      private token: TokenStorageService,
      private uploadService: FileUploadService) { }

  ngOnInit(): void {
      this.currentUser = this.token.getUser();
      this.fileInfos = this.uploadService.getFiles();
  }

  onSubmit(data: any){
    //this.uploadFiles();
    this.subletService.addSublets({"id" : 0, "sellerId" : this.currentUser.id, "address" : data.address, "size" : data.size, "garden" : data.garden, "rooms" : data.rooms, "desc" : data.desc, "price": data.price})
      .subscribe(
        (response: Sublet) => {
		        this.id = response.id;
            this.addImagesToSublet();
	    },
	    (error: HttpErrorResponse) => {
		    alert(error.message);
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
    this.progressInfos = [];
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
		          alert(error.message);
	          }
        );
      }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
            }
          else if (event instanceof HttpResponse) {
              const msg = 'Fájl feltöltve: ' + file.name;
              this.message.push(msg);
              //this.imageNames.push(event: response);
              this.fileInfos = this.uploadService.getFiles();
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Nem sikerült feltölteni a fájlt: ' + file.name;
          this.message.push(msg);
          this.fileInfos = this.uploadService.getFiles();
        });
    }
  }
}
