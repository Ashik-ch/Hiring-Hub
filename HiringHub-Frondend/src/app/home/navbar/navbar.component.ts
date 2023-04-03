import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';     //for logout backpage avoid

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  email: any
  type: any
  name: any
  notifies: boolean = false

  constructor(private rout: Router, private location: Location) { }

  @Input() length: string = ''      //parent child commpunication
  
  @Output() messageEvent = new EventEmitter<string>();   //child-parent communication


  ngOnInit() {
    // Backinig avoidance when logut clicked
    if (!localStorage.getItem("email")) {
      alert("Login First")
      this.rout.navigateByUrl("login")
    }

    this.email = JSON.parse(localStorage.getItem("email") || "")
    this.type = JSON.parse(localStorage.getItem("type") || "")
    this.name = JSON.parse(localStorage.getItem("name") || "")
    console.log(`email: ${this.email} type: ${this.type}  name:  ${this.name}`);


    
  }
// parent child commnication
  sendMessage() {
    this.messageEvent.emit('Click Notification icon | Approve or Reject Application ');
  }


  logout() {
    this.rout.navigate(['']);

    // Replace the current URL with the login page URL
    this.location.replaceState('/login');

    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('companyname')
    localStorage.removeItem('type')

  }


  
  notify() {
    this.notifies = this.notifies ? false : true;
    console.log("nn", this.length);
  }


}
