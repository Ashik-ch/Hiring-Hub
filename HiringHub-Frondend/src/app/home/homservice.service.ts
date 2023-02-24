import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomserviceService {
  user: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {


  }

  feedback(name: any, feedback: any, email: any, type: any) {
    const body = { name, feedback, email, type }
    return this.http.post('http://localhost:3000/feedback', body)
  }

  profile(email: any) {
    return this.http.get('http://localhost:3000/profile/' + email)
  }



}
