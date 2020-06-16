import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { USER } from 'src/app/modals/user';

@Component({
  selector: 'app-updatelist',
  templateUrl: './updatelist.component.html',
  styleUrls: ['./updatelist.component.css']
})
export class UpdatelistComponent implements OnInit {
   id:any;
   list:USER;
   
  constructor(private route: ActivatedRoute,private dataService:DataService,private router:Router) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
        this.id = params['id'];
    })
  }

  ngOnInit(): void {
    this.list=this.dataService.getListById(parseInt(this.id, 0));
    console.log(this.id);
    console.log(this.list);
  }
   
  updateList(){
   this.dataService.updateList(this.list);
   this.router.navigate(['/dashboard']);
  }
}
