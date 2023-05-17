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
      .subscribe((result) => {
        this.paramsid = result
        this.paramsid = this.paramsid.id
        console.log("params", this.paramsid);
      })




    this.serv.updatecard(this.paramsid)
      .subscribe((result) => {
        console.log("ressult", result);
        this.body = result.data[0]
        this.bodyname = this.body.jobname
        console.log("ParamsBody", this.body);
      })
  }




  updatejob(form: any) {
    console.log("Form", form);
    console.log("paramsid", this.paramsid);

    this.serv.updatejob(this.paramsid, form.value.jobname, form.value.company, form.value.description,
      form.value.place, form.value.pincode, form.value.number, form.value.time, form.value.image)
      .subscribe((result: any) => {
        console.log("resultadjob", result)
        alert(result.message)
        location.reload()

      })
    console.log("resultsjob", this.updatejob)

  }
}
