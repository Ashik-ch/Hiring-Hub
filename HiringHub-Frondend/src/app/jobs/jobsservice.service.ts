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

  addjob(jobname: any, description: any, place: any, time: any,
    company: any, number: any, image: any, pincode: any) {
    const id = Number(this.currentMaxid) + 1
    const body = { jobname, description, place, time, company, number, id, image, pincode }
    return this.http.post('http://localhost:3000/jobs', body)
  }

  viewcard(jobname: any): Observable<any> {
    return this.http.get('http://localhost:3000/jobview/' + jobname)
  }


  
  apply(email: any, jobname: any, company: any) {
    const body = { email, jobname, company }
    return this.http.post('http://localhost:3000/apply', body)
  }

  // admin list
  appliedlist() {
    return this.http.get('http://localhost:3000/apply')
  }

  // userlist
  applied(email: any): Observable<any> {
    return this.http.get('http://localhost:3000/myjobs/' + email)
  }




}



