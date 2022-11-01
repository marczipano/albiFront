import { Component, OnInit } from '@angular/core';
import { SubletService } from '@services/sublet.service';
import { SubletInfo } from '@models/subletinfo';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '@services/token-storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  public sublets: SubletInfo[];
  currentUser: any;

  content?: string;

  unusedCount: number;

  displayedColumns: string[] = ['id', 'address', 'images', 'delete', 'email'];

  constructor(private route: ActivatedRoute, 
      private router: Router, 
      private subletService: SubletService,
      private token: TokenStorageService) { }

    ngOnInit(): void {
     this.currentUser = this.token.getUser();
      if(!this.currentUser.id || !this.currentUser.roles.includes('ROLE_ADMIN')){
        this.router.navigate(['/home/']);  
      }

      this.subletService.getSubletInfos().subscribe(
	    (response: SubletInfo[]) => {
		    this.sublets = response;
	    },
	    (error: HttpErrorResponse) => {
		    alert(error.message);
	    }
	   );

     this.subletService.getUnusedCount().subscribe(
	    (response: number) => {
		    this.unusedCount = response;
	    }
	   );
    }

    deleteImages(): void {
      this.subletService.deleteUnusedImages().subscribe();
    }
}
