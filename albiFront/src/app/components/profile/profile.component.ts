import { Component, OnInit } from '@angular/core';
import { SubletInfo } from '@models/subletinfo';
import { SubletService } from '@services/sublet.service';
import { TokenStorageService } from '@services/token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  public sublets: SubletInfo[];

  constructor(private token: TokenStorageService, private subletService: SubletService, private router: Router) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if(!this.currentUser.id){
        this.router.navigate(['/login/']);  
    }else{
      this.getSublets();
    }
  }

  public getSublets(): void{
	  this.subletService.getSubletInfosByUser(this.currentUser.id).subscribe(
	  (response: SubletInfo[]) => {
		  this.sublets = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );
  }
}
