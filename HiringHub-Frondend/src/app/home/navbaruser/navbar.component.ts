import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';     //for logout backpage avoid

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  email: any
  type: any
  name: any

  constructor(private rout: Router, private location: Location) { }

  ngOnInit() {
    
    // Backinig avoidance when logut clicked
    if(!localStorage.getItem("email")){
      alert("Login First")
      this.rout.navigateByUrl("login")
    }



    this.email = JSON.parse(localStorage.getItem("email") || "")
    this.type = JSON.parse(localStorage.getItem("type") || "")
    this.name = JSON.parse(localStorage.getItem("name") || "")

    console.log(`email: ${this.email} type: ${this.type}  name:  ${this.name}`);

   }





  logout() {
    this.rout.navigate(['/login']);

    // Replace the current URL with the login page URL
    this.location.replaceState('/login');

    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('companyname')
    localStorage.removeItem('type')

  }



}
