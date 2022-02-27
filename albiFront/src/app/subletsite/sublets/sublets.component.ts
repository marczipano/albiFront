import { Component, OnInit } from '@angular/core';
import { Sublet } from '../../sublet';
import { SubletService } from '../../sublet.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-sublets',
  templateUrl: './sublets.component.html',
  styleUrls: ['./sublets.component.css']
})
export class SubletsComponent implements OnInit {
  public sublets: Sublet[];

  constructor(private subletService: SubletService) {

  }

  ngOnInit(): void {
    this.getSublets(); 
  }

  public getSublets(): void{
	  this.subletService.getSublets().subscribe(
	  (response: Sublet[]) => {
		  this.sublets = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );
  }

}
