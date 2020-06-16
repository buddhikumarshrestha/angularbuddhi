import { Injectable } from '@angular/core';
import { USER } from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:USER[]=[];

  constructor() {
    this.data =[
      {id:1,first_name:'Buddhi',middle_name:'Kumar', last_name:'Shrestha',email:'hellobuddhi@gmail.com' },
      {id:2,first_name:'Ram',middle_name:'Kumar', last_name:'Shrestha',email:'ram@gmail.com' },
      {id:3,first_name:'Hari',middle_name:'Kumar', last_name:'Shrestha',email:'hari@gmail.com' },
      {id:4,first_name:'Pratap',middle_name:'Kumar', last_name:'Shrestha',email:'pratap@gmail.com' },
      {id:5,first_name:'Prabhav',middle_name:'Kumar', last_name:'Shrestha',email:'prabhav@gmail.com' },
      {id:6,first_name:'Asim',middle_name:'Kumar', last_name:'Shrestha',email:'asim@gmail.com' },
      {id:7,first_name:'Pradin',middle_name:'Kumar', last_name:'Shrestha',email:'pradin@gmail.com' },
      {id:8,first_name:'Suman',middle_name:'Kumar', last_name:'Shrestha',email:'suman@gmail.com' },
      {id:9,first_name:'Gorakh',middle_name:'Kumar', last_name:'Shrestha',email:'gorakh@gmail.com' },
      {id:10,first_name:'Khadga',middle_name:'Kumar', last_name:'Shrestha',email:'khadga@gmail.com' },
      {id:11,first_name:'Deepanker',middle_name:'Kumar', last_name:'Shrestha',email:'deepanker@gmail.com' },
      {id:110,first_name:'Deepanker',middle_name:'Kumar', last_name:'Shrestha',email:'deepanker@gmail.com' },
    ];
   }
   removeList(id:number){
    const index = this.data.findIndex(x => x.id === id);
    this.data.splice(index,1);
  }

  updateList(user:USER){
    const index = this.data.findIndex(x => x.id === user.id);
    this.data[index] =  user;
  }
    
  addList(user:USER){
    this.data.push(user);
    
   }

   getList(){
     return this.data;
   }
   getListById(id:number){
    const found = this.data.find(x => x.id === id);
    return found;
   }





  }