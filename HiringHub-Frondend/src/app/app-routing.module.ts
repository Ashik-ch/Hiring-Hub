import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module')
      .then(mdl => mdl.AuthModule)
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
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module')
  //     .then(mdl => mdl.AdminModule)
  // },
  { path: 'admin', component: AdminComponent }








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
