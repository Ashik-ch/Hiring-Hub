import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  email: any 
  type:any

  constructor(private rout: Router) { }
  
  
  ngOnInit() {
    this.email = localStorage.getItem("companyname")
    console.log("adminemail", this.email);
  
    this.type= localStorage.getItem("type")
    console.log("admintype", this.type);
   }



  // jobclick() {
  //   this.rout.navigateByUrl('jobs')

  // }

  joblistclick() {
    this.rout.navigateByUrl('joblist')

  }


  login() {
    this.rout.navigateByUrl('login')
  }

  logout() {
    this.rout.navigateByUrl('login')
    localStorage.removeItem('key')
  }



}
