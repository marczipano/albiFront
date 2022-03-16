import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sublet } from '../../sublet';
import { SubletService } from '../../sublet.service';
import { FormsModule }   from '@angular/forms';
import { TokenStorageService } from '../../token-storage.service';

@Component({
  selector: 'app-sublet-add',
  templateUrl: './sublet-add.component.html',
  styleUrls: ['./sublet-add.component.css']
})



export class SubletAddComponent implements OnInit {

  sublet: Sublet;
  currentUser: any;

  constructor(private route: ActivatedRoute, 
      private router: Router, 
      private subletService: SubletService,
      private token: TokenStorageService) { }

  ngOnInit(): void {
      this.currentUser = this.token.getUser();
  }

  onSubmit(data: any){
    this.subletService.addSublets({"id" : 0, "sellerId" : this.currentUser.id, "address" : data.address, "size" : data.size, "garden" : data.garden, "rooms" : data.rooms, "desc" : data.desc, "price": data.price}).subscribe(result => this.gotoList());
  }

  gotoList(){
    this.router.navigate(['/home/']);
    
  }

}
