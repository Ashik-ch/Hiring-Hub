import { Component, OnInit } from '@angular/core';
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
  type:any

  constructor(private jobser: JobsserviceService) { }
  ngOnInit() {

  }

}
