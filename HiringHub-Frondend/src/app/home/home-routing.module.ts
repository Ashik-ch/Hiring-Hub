import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from '../jobs/apply/apply.component';
import { JoblistComponent } from '../jobs/joblist/joblist.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  
  { path: 'apply', component: ApplyComponent },
  { path: 'joblist', component: JoblistComponent },
  { path: 'joblist', component: JoblistComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile/:email', component: ProfileComponent },
  { path: 'feedback', component: FeedbackComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
