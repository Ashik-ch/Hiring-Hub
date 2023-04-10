import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from '../home/home/home.component';
// import { FooterComponent } from './footer/footer.component';
import { HomeModule } from '../home/home.module';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

// import { HomeModule } from '../home/home.module';





@NgModule({
  declarations: [


    AdminComponent
  ],

  imports: [
    CommonModule,
    HomeModule,
    AdminRoutingModule,
    FormsModule

  ],
  exports: [
    AdminRoutingModule,
    AdminComponent

  ]
})
export class AdminModule { }
