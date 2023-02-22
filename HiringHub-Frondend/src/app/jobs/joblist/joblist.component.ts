import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JobsserviceService } from '../jobsservice.service';




@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent {
  show = 1

  jobname: any
  description: any
  place: any
  time: any
  company: any
  number: any
  elements: any = []
  searchTerm: string = ''
  id: any
  image:any
  term: any;




  constructor(private service: JobsserviceService, private act: ActivatedRoute, private http: HttpClient) { }

  collect: any= []

  ngOnInit(): void {

    this.joblist()

  }


  joblist() {
    this.service.joblist()
      .subscribe((result: any) => {
        console.log("res",result);
        
        this.elements = result.data
        console.log("res2",result.data);

        console.log("Elements:", this.elements)

        // id genration
        let maxId = 0
        var item = this.elements.length
        if (item >= maxId) {
          maxId = item
        }
        // pushing to service
        this.service.currentMaxid = maxId
        console.log("maxid", this.service.currentMaxid);
      })
  }

  clicked() {
    if (this.show = 1) {
      this.show = 0
    }
    else if (this.show = 0) {
      this.show = 1
    }
  }

  addjob() {
    this.service.addjob(this.jobname, this.description, this.place, this.time, this.company, this.number, this.image)
      .subscribe((result: any) => {
        console.log("result", result)
        console.log(":elements2:", this.elements)
        alert(result.message)
        location.reload()
      }
      )
  }

 
  btnclick(id: any) {
    this.http.delete('http://localhost:3000/joblist/' + id)
      .subscribe(() => {
        location.reload()
      })
  }




  delete(id: any) {
    //   console.log("dadadta", id);

    //   this.service.delete(id)
    //     .subscribe((result: any) => {
    //       console.log("111", result);
    //       alert(result.message)
    //       console.log("deleting");

    //       console.log("asdas", this.service.delete);

    //       // .subscribe((result: any) => {
    //       //   alert(result.message)
    //       //   console.log("deleting");

    //       // },
    //       //   ((result) => {
    //       //     alert(result.error.message)

    // )




  }

  jobcard() {
    this.service.joblist()
      .subscribe((result: any) => {
        this.elements = result.data
      }

      )
  }





  onChange() { }
}





