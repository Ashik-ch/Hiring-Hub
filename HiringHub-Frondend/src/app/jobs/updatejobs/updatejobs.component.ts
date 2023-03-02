import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsserviceService } from '../jobsservice.service';

@Component({
  selector: 'app-updatejobs',
  templateUrl: './updatejobs.component.html',
  styleUrls: ['./updatejobs.component.scss']
})
export class UpdatejobsComponent {


  jobname: any
  description: any
  place: any
  time: any
  company: any
  number: any
  elements: any = []

  id: any
  image: any

  pincode: any
  paramsid: any

  body: any
  bodyname: any

  constructor(private ar: ActivatedRoute, private serv: JobsserviceService) {

  }

  ngOnInit() {

    this.ar.params
      .subscribe((data) => {
        this.paramsid = data['id']
        console.log("paramsid", this.paramsid);

      })
    this.serv.updatecard(this.paramsid)
      .subscribe((result) => {
        this.body = result.data[0]
        this.bodyname = this.body.jobname
        console.log("resulbody", this.body);
        console.log("bodyname", this.bodyname);
     


      })
  }


  updatejob(id: any) {
    this.serv.viewcard(this.paramsid)
      .subscribe((result) => {
        this.body = result
        console.log("result", this.body);

      })

    alert("updated")
  }
}