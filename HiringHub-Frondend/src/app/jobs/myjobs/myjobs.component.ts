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

  constructor(private service: JobsserviceService, private AR: ActivatedRoute) { }


  ngOnInit() {

    // this.email = JSON.parse(localStorage.getItem("email") || "")
    // console.log("email", this.email);


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
        // this.elements = this.elements['jobname']

        console.log("list", this.elements);

        this.jobname = this.elements.jobname
        console.log("a", this.jobname);



        // for (let i = 0; i < this.elements.length; i++) {
        //   if (this.elements[i].email == this.emails) {
        //     this.s= this.elements[i];
        //   }
        // console.log("list2",this.s);

        // }
        // console.log("list2", this.elements);
        // console.log("list2",this.elements[i]);

        // this.parmsid = this.elements["email"] == this.emails
        // this.elements =  this.elements["email"=this.email]
        // if (this.elements['email'] == this.emails) {
        // this.parmsid = this.elements['email']
        // }

        // console.log("list2", this.elements);
        // console.log("list3", this.parmsid);

        // return this.elements
        // }
        // this.elements = this.elements['email ']==
        // console.log("list2", this.elements);

      })
  }

}
