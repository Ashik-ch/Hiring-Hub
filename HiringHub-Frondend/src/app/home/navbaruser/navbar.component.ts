import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  email: any
  type: any
  name: any

  constructor(private rout: Router) { }

  ngOnInit() {


    this.email = JSON.parse(localStorage.getItem("email") || "")
    this.type = JSON.parse(localStorage.getItem("type") || "")
    this.name = JSON.parse(localStorage.getItem("name") || "")


    console.log(`email: ${this.email} type: ${this.type}  name:  ${this.name}`);


  }







  login() {
    this.rout.navigateByUrl('login')
  }

  logout() {
    this.rout.navigateByUrl('login')

    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('companyname')
    localStorage.removeItem('type')

  }



}
