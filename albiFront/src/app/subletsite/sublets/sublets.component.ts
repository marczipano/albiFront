import { Component, OnInit } from '@angular/core';
import { SubletInfo } from '../../subletinfo';
import { SubletService } from '../../sublet.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core'; 
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-sublets',
  templateUrl: './sublets.component.html',
  styleUrls: ['./sublets.component.css']
})
export class SubletsComponent implements OnInit {
  public sublets: SubletInfo[];
  public findAddress: string;
  public sortBy: string;

  public sortOptions: option[] = [
    { name: "Ár szerint növekvő", value: "priceAsc" },
    { name: "Ár szerint csökkenő", value: "priceDesc" },
    { name: "Méret szerint növekvő", value: "sizeAsc" },
    { name: "Méret szerint csökkenő", value: "sizeDesc" },
    { name: "Kertes ingatlanok", value: "onlyGarden" },
    { name: "Kert nélküli ingatlanok", value: "noGarden" },
    { name: "Legrégibb elöl", value: "normal" }  
  ];

 
  

  constructor(private subletService: SubletService) {
  }

  ngOnInit(): void {
    this.getSubletInfos(); 
  }

  public getSubletInfosByAddress(): void{
	  this.subletService.findSubletInfoByAddress(this.findAddress).subscribe(
	  (response: SubletInfo[]) => {
		  this.sublets = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );
  }

  public getSubletInfosOrdered(command: string): void{
    this.findAddress = "";
	  this.subletService.getSubletInfosOrdered(command).subscribe(
	  (response: SubletInfo[]) => {
		  this.sublets = response;
	  },
	  (error: HttpErrorResponse) => {
		  alert(error.message);
	  }
	 );
  }



  public getSubletInfos(): void{
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

class option{
    name: string;
    value: string;
}
