import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  email: any 

  constructor(private rout: Router) { }

  ngOnInit() {
    this.email = localStorage.getItem("name")

     console.log("useremail", this.email);
   }





  jobclick() {
    this.rout.navigateByUrl('jobs')

  }

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
