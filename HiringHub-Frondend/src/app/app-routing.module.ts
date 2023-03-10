import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module')
      .then(mdl => mdl.AuthModule)
  },
  // { path: '', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  // {
  //   path: 'adminhome',
  //   loadChildren: () => import('./admin/admin.module')
  //     .then(mdl => mdl.AdminModule)
  // },

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
