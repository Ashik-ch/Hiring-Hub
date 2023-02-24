import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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
  pincode:any




  constructor(private service: JobsserviceService, private act: ActivatedRoute, private http: HttpClient) { }

  collect: any= []

  ngOnInit(): void {

    this.joblist()

  }


  joblist() {
    this.service.joblist()
      .subscribe((result: any) => {
        this.elements = result.data
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

  addjob() {
    this.service.addjob(this.jobname, this.description, this.place, this.time, this.company, this.number, this.image, this.pincode)
      .subscribe((result: any) => {
        console.log("resultadjob", result)
      
        alert(result.message)
        location.reload()
      }
      )
  }

 
  deletebtn(id: any) {
    this.http.delete('http://localhost:3000/joblist/' + id)
      .subscribe((result) => {
        console.log("id",id);
        console.log("resuldet",result);
        
        location.reload()
      })
  }




  

  jobcard() {
    this.service.joblist()
      .subscribe((result: any) => {
        this.elements = result.data
      }

      )
  }





}





