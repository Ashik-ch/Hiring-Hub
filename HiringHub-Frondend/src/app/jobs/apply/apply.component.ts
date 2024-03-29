import { Component, OnInit } from '@angular/core';
import { JobsserviceService } from '../jobsservice.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  elements: any
  len: any
  show: any
  company: any
  newelem: any

  childMessage: any;

  constructor(private servic: JobsserviceService) { }
  ngOnInit(): void {
    this.appliedlist()
    this.show = true

    this.company = JSON.parse(localStorage.getItem("companyname") || "")
  }




  appliedlist() {
    this.servic.appliedlist()
      .subscribe((result: any) => {
        this.elements = result.data
        console.log("Elements:", this.elements)

        this.newelem = this.elements.filter((item: any) => {

          const check = item.company === this.company;
          console.log("check", check);

          return check;
        });
        // console.log("this.newelem", this.newelem)
        // this.elements = this.newelem
        // console.log("list", this.elements);
        // console.log("length of array:", this.len = this.elements.length);
      })
  }



  receiveMessage(event: any) {
    this.childMessage = event;
  }


  approvebtn(t: any) {
    const status = "Approved"
    console.log("tttt", t);
    console.log("aa", t.jobname, t.company, status);
    this.servic.approveapplies(t.email, t.jobname, t.company, status)
      .subscribe((result: any) => {
        this.elements = result
        console.log("list", this.elements);

        location.reload()
      })
  }

  //// for delete
  // rejectbtn(t: any) {
  //   this.servic.reject(t.jobname)
  //     .subscribe((result: any) => {
  //       this.elements = result
  //       console.log("list", this.elements);
  //       location.reload()
  //     }
  //     )

  rejectbtn(t: any) {
    const status = "Rejected"
    console.log("tttt", t);
    console.log("aa", t.jobname, t.company, status);
    this.servic.approveapplies(t.email, t.jobname, t.company, status)
      .subscribe((result: any) => {
        this.elements = result
        console.log("list", this.elements);
        location.reload()
      })


    // this.servic.rejectapplies(t)
    // .subscribe((result: any) => {
    // this.elements = result
    // console.log("list", this.elements);
    // location.reload()
    // }
    // )
  }

}

