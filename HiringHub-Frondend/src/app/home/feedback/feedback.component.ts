import { Component } from '@angular/core';
import { JobsserviceService } from 'src/app/jobs/jobsservice.service';

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
  

  constructor(private jobser: JobsserviceService) { }
  ngOnInit() {



    this.email = JSON.parse(localStorage.getItem("email") || "")
    this.name = JSON.parse(localStorage.getItem("name") || "")
    this.type = JSON.parse(localStorage.getItem("type") || "")
  }


  send() {
    this.jobser.feedback(this.name, this.feedback, this.email, this.type)
      .subscribe(result => {
        console.log("result", result);
        alert(`Thank You  ${this.name}`)
        location.reload()
      })

  }
}
