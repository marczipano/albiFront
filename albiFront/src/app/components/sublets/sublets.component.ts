import { Component, OnInit } from '@angular/core';
import { SubletInfo } from '@models/subletinfo';
import { SubletService } from '@services/sublet.service';
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
  public loading: boolean;
  public errorMsg: string;

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
    this.findAddress = "";
    this.loading = true;
  }

  ngOnInit(): void {
    this.getSubletInfos(); 
  }

   public getSubletInfosFilteredOrdered(order: string): void{
	  this.subletService.getSubletInfosFilteredOrdered(order, this.findAddress).subscribe(
	  (response: SubletInfo[]) => {
		  this.sublets = response;
      this.errorMsg = '';
	  },
	  (error: HttpErrorResponse) => {
		  this.errorMsg = error.message;
	  }
	 );
  }

  public getSubletInfos(): void{
	  this.subletService.getSubletInfos().subscribe(
	  (response: SubletInfo[]) => {
		  this.sublets = response;
      this.loading = false;
      this.errorMsg = '';
	  },
	  (error: HttpErrorResponse) => {
      this.errorMsg = error.message;
      this.loading = false;
	  }
	 );
  }
}

class option{
    name: string;
    value: string;
}
