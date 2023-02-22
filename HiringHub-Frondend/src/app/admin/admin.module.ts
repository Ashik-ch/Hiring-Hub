import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
// import { FooterComponent } from './footer/footer.component';
import { HomeModule } from '../home/home.module';

// import { HomeModule } from '../home/home.module';





@NgModule({
  declarations: [
    HomeComponent,
  ],

  imports: [
    CommonModule,
    HomeModule,
    AdminRoutingModule
    
  ],
  exports: [
    AdminRoutingModule,
    HomeComponent,

  ]
})
export class AdminModule { }
