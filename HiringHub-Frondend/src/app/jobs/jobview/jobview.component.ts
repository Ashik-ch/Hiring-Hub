import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsRoutingModule } from '../jobs-routing.module';
import { JobsserviceService } from '../jobsservice.service';

@Component({
  selector: 'app-jobview',
  templateUrl: './jobview.component.html',
  styleUrls: ['./jobview.component.scss']
})
export class JobviewComponent {
  elements: any

  parmsid: any
  email: any
  jobname: any
  company: any

  constructor(private service: JobsserviceService, private AR: ActivatedRoute, private rout: Router) { }


  ngOnInit() {

    this.email = JSON.parse(localStorage.getItem("email") || "")

    this.AR.params
      .subscribe((result) => {
        this.parmsid = result['jobname']
        console.log("params", this.parmsid);
      })

    this.service.viewcard(this.parmsid)
      .subscribe((result) => {
        console.log("Res", result);
        this.elements = result
        this.elements = this.elements.data
        this.jobname = this.elements[0]['jobname']
        this.company = this.elements[0]['company']
        console.log(`jobname1 ${this.jobname}, company ${this.company}`);
      })
  }



  apply() {
    this.service.apply(this.email, this.jobname, this.company)
      .subscribe((result) => {
        console.log("aplyres", result);
        alert("Application submited Successfully")
        this.rout.navigateByUrl('jobs')
        
        
      }, (result) => {
        alert(result.error.message)
      })

  }
}