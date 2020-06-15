import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Actor List';
  name="this is first project by the buddhi";
  textparent ="this content is in the parent";
  private _text = "This content is in the parent";
 
  ot="test";
  serviceText=null;
  //private xService:BackendApiService

  constructor(){

  }
  test(str){
    this.ot=str;
  }
  // openText(){
  //  this.serviceText= this.xService.getUserData();
  // }
}
