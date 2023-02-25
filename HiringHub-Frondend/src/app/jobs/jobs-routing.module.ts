import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { JoblistComponent } from './joblist/joblist.component';
import { JobviewComponent } from './jobview/jobview.component';
import { MyjobsComponent } from './myjobs/myjobs.component';
import { UpdatejobsComponent } from './updatejobs/updatejobs.component';


const routes: Routes = [
  { path: '', component: JobcardComponent },
  { path: 'joblist', component: JoblistComponent },
  { path: 'jobview/:jobname', component: JobviewComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'myjobs/:email', component: MyjobsComponent },
  { path: 'update/:id', component: UpdatejobsComponent }


 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
