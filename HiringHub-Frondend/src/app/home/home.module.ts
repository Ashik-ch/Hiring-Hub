import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
// import { JobsModule } from '../jobs/jobs.module';
import { HomeRoutingModule } from './home-routing.module';
// import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    // JobsModule,
    HomeRoutingModule,
    // AuthModule
  
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent

  ]
})
export class HomeModule { }
