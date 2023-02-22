import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

// import { HomeModule } from '../home/home.module';





@NgModule({
  declarations: [

    NavbarComponent,
    HomeComponent,
    FooterComponent


  ],
  imports: [
    CommonModule,
    // HomeModule

  ],
  exports: [
    AdminRoutingModule,
    NavbarComponent,
    HomeComponent,
    FooterComponent


  ]
})
export class AdminModule { }
