import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {
  new_first_name:string
  new_middle_name:string
  new_last_name:string
  new_email:string
  constructor(private dataSerive:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  addList(){
    this.dataSerive.addList({
      id: new Date().getTime(),
      first_name:this.new_first_name,
      middle_name:this.new_middle_name,
      last_name:this.new_last_name,
      email:this.new_email

    });
    this.router.navigate(['/dashboard']);
  }

}
