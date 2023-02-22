import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AuthserviceService {
  constructor(private http: HttpClient) { }

  login(email: any, password: any, ) {
    const body = {
      email, password
    }
    return this.http.post('http://localhost:3000/login', body)
  }

  register(name: any, age: any, mobile: any, email: any, password: any, gender: any, type: any, position: any, companyname: any, companytype: any) {
    const body = {
      name, email, mobile, age, password, gender, type, position, companyname, companytype,
    }
    return this.http.post('http://localhost:3000/register', body)
  }


}
