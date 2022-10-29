import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sublet } from '@models/sublet';
import { SubletService } from '@services/sublet.service';

@Component({
  selector: 'app-sublet-delete',
  templateUrl: './sublet-delete.component.html',
  styleUrls: ['./sublet-delete.component.css']
})
export class SubletDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
      private router: Router, 
      private subletService: SubletService) { }

  ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
        let id = params['id'];
        this.subletService.deleteSublets(id).subscribe();
      });
  }

}
