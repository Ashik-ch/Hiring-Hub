import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HomserviceService } from '../homservice.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  name: any
  feedback: any
  email: any
  type: any
  popup: any

  // reseting cancel in feedback
  @ViewChild('myForm', { static: false }) myForm!: NgForm;




  constructor(private servc: HomserviceService) { }
  ngOnInit() {



    this.email = JSON.parse(localStorage.getItem("email") || "")
    this.name = JSON.parse(localStorage.getItem("name") || "")
    this.type = JSON.parse(localStorage.getItem("type") || "")
  }


  send() {
    this.servc.feedback(this.name, this.feedback, this.email, this.type)
      .subscribe(result => {
        console.log("result", result);
        this.popup = true
        setTimeout(this.send, 2000);
        location.reload()
      })

  }

  resetForm() {
    this.myForm.resetForm();
  }
}
