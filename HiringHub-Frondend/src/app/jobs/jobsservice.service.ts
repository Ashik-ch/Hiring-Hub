import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobsserviceService {

  currentMaxid: any = 0

  constructor(private http: HttpClient) { }

  joblist() {
    return this.http.get('http://localhost:3000/jobs')
  }

  addjob(jobname: any, description: any, place: any, time: any, company: any, number: any, image: any) {
    const id = Number(this.currentMaxid) + 1
    console.log("id", this.currentMaxid);
    const body = {
      jobname, description, place, time, company, number, id, image
    }
    return this.http.post('http://localhost:3000/jobs', body)
  }

  viewcard(jobname: any): Observable<any> { 
    return this.http.get('http://localhost:3000/jobview/' + jobname)
  }
 
  // delete(id: any): Observable<any> { 
  //   console.log("deleteid", id);
  //   return this.http.delete('http://localhost:3000/joblist/' + id)
  // }

}
