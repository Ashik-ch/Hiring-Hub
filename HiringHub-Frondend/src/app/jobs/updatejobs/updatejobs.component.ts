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

  constructor(private ar: ActivatedRoute , private serv:JobsserviceService) {

  }

  ngOnInit() {
    this.ar.params
      .subscribe((data) => {
        this.paramsid = data['id']
        console.log("da", this.paramsid);

      })

  }


  updatejob() {
    this.serv.joblis(this.paramsid)
    .subscribe((result)=>{
      console.log("result",result);
      
    })

    alert("updated")
  }
}