import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobcardComponent } from '../jobs/jobcard/jobcard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../admin/navbar/navbar.component';


const routes: Routes = [
  { path: 'nav', component: NavbarComponent },
  { path: '', component: HomeComponent },
  




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
