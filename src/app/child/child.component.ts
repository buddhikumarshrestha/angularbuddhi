import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


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
 

  data:any=[];
  fullImagePath:string;
  new_first_name:string;
  new_middle_name:string;
  new_last_name:string;
  new_email:string;
  nid:number=20;
  //private xService:BackendApiService
  constructor(private library: FaIconLibrary) {
    library.addIcons(faTrash);
  }

  ngOnInit(): void {
  //   this.xService.getUser('https://reqres.in/api/users?page=2').subscribe((res) =>{const x=JSON.parse(JSON.stringify(res));
  //   console.log(x);
  //  this.data=x.data;
  //  this.fullImagePath=x.data[0].avatar;
  //  console.log(this.fullImagePath);

  // });
   this.data =[
     {id:'1',first_name:'Buddhi',middle_name:'Kumar', last_name:'Shrestha',email:'hellobuddhi@gmail.com' },
     {id:'2',first_name:'Ram',middle_name:'Kumar', last_name:'Shrestha',email:'ram@gmail.com' },
     {id:'3',first_name:'Hari',middle_name:'Kumar', last_name:'Shrestha',email:'hari@gmail.com' },
     {id:'4',first_name:'Pratap',middle_name:'Kumar', last_name:'Shrestha',email:'pratap@gmail.com' },
     {id:'5',first_name:'Prabhav',middle_name:'Kumar', last_name:'Shrestha',email:'prabhav@gmail.com' },
     {id:'6',first_name:'Asim',middle_name:'Kumar', last_name:'Shrestha',email:'asim@gmail.com' },
     {id:'7',first_name:'Pradin',middle_name:'Kumar', last_name:'Shrestha',email:'pradin@gmail.com' },
     {id:'8',first_name:'Suman',middle_name:'Kumar', last_name:'Shrestha',email:'suman@gmail.com' },
     {id:'9',first_name:'Gorakh',middle_name:'Kumar', last_name:'Shrestha',email:'gorakh@gmail.com' },
     {id:'10',first_name:'Khadga',middle_name:'Kumar', last_name:'Shrestha',email:'khadga@gmail.com' },
     {id:'11',first_name:'Deepanker',middle_name:'Kumar', last_name:'Shrestha',email:'deepanker@gmail.com' },
   ];
  }
 
  name :String;
  
  public updateName(name:String){
  this.name=name;
  }
d
  removeList(id:number){
    console.log(id);
    this.data.splice(id,1);
  }
  addList(){
    
    this.data.push({
      id:this.nid,
      first_name:this.new_first_name,
      middle_name:this.new_middle_name,
      last_name:this.new_last_name,
      email:this.new_email
    });
  }
  
 

}
