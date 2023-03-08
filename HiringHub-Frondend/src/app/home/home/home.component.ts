import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsserviceService } from 'src/app/jobs/jobsservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: any
  feedback: any
  email: any
  type: any

  constructor(private jobser: JobsserviceService, private rout: Router) { }
  ngOnInit() {


    if (!localStorage.getItem("email")) {
      alert("Login First")
      this.rout.navigateByUrl("login")
    }



    this.email = JSON.parse(localStorage.getItem("email") || "")
    this.type = JSON.parse(localStorage.getItem("type") || "")
    this.name = JSON.parse(localStorage.getItem("name") || "")



    

  }






}
