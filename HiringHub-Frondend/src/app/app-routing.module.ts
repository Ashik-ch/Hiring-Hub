import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './jobs/apply/apply.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'adminhome',
    loadChildren: () => import('./admin/admin.module')
      .then(mdl => mdl.AdminModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(mdl => mdl.HomeModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')  //Lazyload
      .then(mdl => mdl.AuthModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module')
      .then(mdl => mdl.JobsModule)
  },
  // {  path:'jobss', component:JoblistComponent   },
  // {  path:'adminhome', component:HomeComponent  },

  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
