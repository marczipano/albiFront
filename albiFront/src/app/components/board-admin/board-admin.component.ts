import { Component, OnInit } from '@angular/core';
import { SubletService } from '@services/sublet.service';
import { SubletInfo } from '@models/subletinfo';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  public sublets: SubletInfo[];

  content?: string;
  constructor(private subletService: SubletService) { }
  ngOnInit(): void {
    this.subletService.getSubletInfos().subscribe(
	  (response: SubletInfo[]) => {
		  this.sublets = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );
  }
}
