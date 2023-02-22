import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbaruser/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AlertModule } from '@coreui/angular';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
   
  ],
  imports: [
    CommonModule,
    
    HomeRoutingModule,

    AlertModule,
   
  
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent

  ]
})
export class HomeModule { }
