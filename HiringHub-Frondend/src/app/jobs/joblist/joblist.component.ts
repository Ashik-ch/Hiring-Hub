import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


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
  image: any
  term: any;
  pincode: any

  // datenew = new Date().getTime()



  constructor(private service: JobsserviceService, private http: HttpClient) { }

  collect: any = []

  ngOnInit(): void {
    this.joblist()

    const date = new Date(); // create a new date object with the current date and time
    const day = date.getDate(); // get the day of the month (1-31)
    const month = date.getMonth() + 1; // get the month (0-11) and add 1 to convert to (1-12)
    const year = date.getFullYear(); // get the year (4 digits)
    this.time = `${day}/${month}/${year}`; // create a formatted date string in the dd/mm/yyyy format
    console.log(this.time); // output: "8/3/2023" (for example)



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


  jobcard() {
    this.service.joblist()
      .subscribe((result: any) => {
        this.elements = result.data
      })
  }


  deletebtn(id: any) {
    this.http.delete('http://localhost:3000/joblist/' + id)
      .subscribe((result) => {
        console.log("id", id);
        console.log("resuldet", result);
        // this.elements.splice(id, 1)
        location.reload()
      })
  }

}





