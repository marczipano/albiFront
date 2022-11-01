import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sublet } from '@models/sublet';
import { SubletService } from '@services/sublet.service';
import { TokenStorageService } from '@services/token-storage.service';

@Component({
  selector: 'app-sublet-delete',
  templateUrl: './sublet-delete.component.html',
  styleUrls: ['./sublet-delete.component.css']
})
export class SubletDeleteComponent implements OnInit {

  currentUser: any;

  isSuccess = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute, 
      private router: Router,
      private token: TokenStorageService,
      private subletService: SubletService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
        if(!this.currentUser.id){
          this.router.navigate(['/login/']);  
        }
        else{
          this.route.queryParams.subscribe(params => {
                let id = params['id'];
                this.subletService.deleteSublets(id).subscribe(
                data => {
                  this.isSuccess = true;
                  const myTimeout = setTimeout(this.gotoHome, 2000);
                },
                err => {
                  this.errorMessage = err.error.message;
                  this.isSuccess = false;
                }
                );
        });
    }
  }

  gotoHome(): void {
    window.location.href = '/';  
  }

}
