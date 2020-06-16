import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddlistComponent } from './components/addlist/addlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChildComponent } from './components/child/child.component';
import { UpdatelistComponent } from './components/updatelist/updatelist.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AddlistComponent,
    DashboardComponent,
    UpdatelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
