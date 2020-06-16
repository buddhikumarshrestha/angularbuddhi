import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddlistComponent } from './components/addlist/addlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdatelistComponent } from './components/updatelist/updatelist.component';


const routes: Routes = [
  { path: 'add-list', component: AddlistComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'updatelist', component: UpdatelistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
