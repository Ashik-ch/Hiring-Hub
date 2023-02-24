import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbaruser/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FeedbackComponent,
    ProfileComponent,
   
  ],
  imports: [
    CommonModule,
    
    HomeRoutingModule,
    FormsModule,

   
    

 
  
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FeedbackComponent

  ]
})
export class HomeModule { }
