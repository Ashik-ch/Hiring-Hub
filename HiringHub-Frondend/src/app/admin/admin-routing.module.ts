import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobcardComponent } from '../jobs/jobcard/jobcard.component';
import { JoblistComponent } from '../jobs/joblist/joblist.component';
import { HomeComponent } from './home/home.component';

// import { JoblistComponent } from './ ../joblist/joblist.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'joblist', component: JoblistComponent },
  { path: 'jobs', component: JobcardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule]
})
export class AdminRoutingModule { }
