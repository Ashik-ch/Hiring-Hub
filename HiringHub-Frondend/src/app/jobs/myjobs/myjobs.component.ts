import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsserviceService } from '../jobsservice.service';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.scss']
})
export class MyjobsComponent {

  elements: any
  email: any
  jobname: any
  company: any
  s: any = []
  rej = ''
  
  constructor(private service: JobsserviceService, private AR: ActivatedRoute) { }


  ngOnInit() {

    this.AR.params
      .subscribe((result) => {
        // console.log("res", result);
        this.email = result['email']
        console.log("paramsemail", this.email);
      })
    this.appliedlist(this.email)
  }

  appliedlist(email: any) {
    this.service.applied(this.email)
      .subscribe((result: any) => {
        console.log("resfun", result);
        this.elements = result.data
        console.log("list", this.elements);
        this.elements.map((items: any) => {
          if (items.status == "Rejected") {
            this.rej = items.status
          }
        })
      })
  }
}
