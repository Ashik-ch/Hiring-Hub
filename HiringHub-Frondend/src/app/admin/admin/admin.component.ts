import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JobsserviceService } from 'src/app/jobs/jobsservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {


  elements: any
  job: any

  element: any
  len: any
  show: any

  constructor(private service: JobsserviceService, private http: HttpClient) { }


  ngOnInit() {
    this.jobllist()



  }


  jobllist() {
    this.service.joblist()
      .subscribe((result) => {
        this.elements = result
        this.job = this.elements.data
        console.log("Res", this.job);
      })
  }




  // deleteProduct(product: any) {
  //   const productId = product._id;
  //   console.log("productId", productId);
  //   this.service.deleteProducts(productId)
  //     .subscribe((response) => {
  //       console.log("Response", response);
  //       // Update the product list
  //       this.productlist();
  //     });
  // }





  approvebtn(t: any) {
    const status = "Verified"
    console.log("tttt", t);
    console.log("aa", t.jobname, t.company, status);
    this.service.approvejob(t.jobname, t.company, status)
      .subscribe((result: any) => {
        this.elements = result
        console.log("list", this.elements);

        location.reload()
      })
  }

  rejectbtn(t: any) {
    const status = "Rejected"
    console.log("tttt", t);
    console.log("aa", t.jobname, t.company, status);
    this.service.approvejob(t.jobname, t.company, status)
      .subscribe((result: any) => {
        this.elements = result
        console.log("list", this.elements);

        location.reload()
      })
  }




  // for delete
  deletebtn(t: any) {
    let jobname = t.jobname
    console.log("jobname", jobname);
    let id = t.id
    console.log("id", id);
    this.http.delete('http://localhost:3000/job/' + jobname)
      .subscribe((result) => {
        this.elements = result
        console.log("res", this.elements);
        // const newArray = Array.from(this.elements);
        // newArray.splice(id, 1);
        // this.elements = newArray;
        // this.elements.splice(id, 1)
        location.reload()
      })
  }


}
