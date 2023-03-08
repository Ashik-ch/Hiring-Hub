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
        console.log("ParamsBody", this.body);
      })
  }




  updatejob(form: any) {
    this.serv.updatejob(form.value.id,form.value.jobname, form.value.description, form.value.place, form.value.time,
      form.value.company, form.value.number, form.value.pincode, form.value.image)
      .subscribe((result: any) => {
        console.log("resultadjob", result)
        alert(result.message)
        // location.reload()

        alert("updated")
      })
    console.log("resultsjob", this.updatejob)

  }
}
