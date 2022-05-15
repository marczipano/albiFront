import { Component, OnInit } from '@angular/core';
import { Sublet } from '../sublet';
import { SubletService } from '../sublet.service';
import { TokenStorageService } from '../token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  public sublets: Sublet[];

  constructor(private token: TokenStorageService, private subletService: SubletService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getSublets(); 
  }

  public getSublets(): void{
	  this.subletService.getSubletsByUser(this.currentUser.id).subscribe(
	  (response: Sublet[]) => {
		  this.sublets = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );
  }
}
