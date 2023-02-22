import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { NavbarComponent } from '../admin/navbar/navbar.component';
import { ApplyComponent } from '../jobs/apply/apply.component';
import { JoblistComponent } from '../jobs/joblist/joblist.component';


const routes: Routes = [
  { path: 'user', component: HomeComponent },
  // { path: 'nav', component: NavbarComponent },

  { path: 'apply', component: ApplyComponent },
  { path: 'joblist', component: JoblistComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
