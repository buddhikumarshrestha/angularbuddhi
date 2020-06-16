import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { USER } from 'src/app/modals/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() textparent;
  @Output() valuechange =new EventEmitter();
  counter = 0;

  // valueChanged(){
  //   this.counter=this.counter+1;
  //   this.valuechange.emit(this.counter);
  // }
 

  data:USER[]=[];
  
  //private xService:BackendApiService
  constructor(private library: FaIconLibrary, private dataService:DataService, private router:Router) {
    library.addIcons(faTrash,faUserEdit);
  }

  ngOnInit(): void {
    this.data=this.dataService.getList();

  //   this.xService.getUser('https://reqres.in/api/users?page=2').subscribe((res) =>{const x=JSON.parse(JSON.stringify(res));
  //   console.log(x);
  //  this.data=x.data;
  //  this.fullImagePath=x.data[0].avatar;
  //  console.log(this.fullImagePath);

  }
  removeList(id:number){
    this.dataService.removeList(id);
  }

  redirectUpdate(id:number){
    this.router.navigate(['updatelist'], { queryParams: { id:id } });
  }
 

}
