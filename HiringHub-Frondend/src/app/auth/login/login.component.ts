import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type: any
  companyname: any
  res: any

  loginform = this.fb.group({            //form grp
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })
  name: any;

  constructor(private service: AuthserviceService, private rout: Router, private fb: FormBuilder) { }

  ngOnInit() { }

  login() {

    var email = this.loginform.value.email
    var password = this.loginform.value.password

    if (this.loginform.valid) {
      this.service.login(email, password)
        .subscribe((result: any) => {
          console.log("userresult", result);

          this.type = result.data["type"]
          this.companyname = result.data["companyname"]
          this.name = result.data["name"]

          localStorage.setItem("email", JSON.stringify(email));
          localStorage.setItem("type", JSON.stringify(this.type));
          localStorage.setItem("companyname", JSON.stringify(this.companyname));
          console.log(`email: ${email} type: ${this.type}  companyname:  ${this.companyname} - ${this.name} `);

          if (this.type == "company") {

            localStorage.setItem("name", JSON.stringify(this.name));
            this.rout.navigate(['adminhome'])

          }
          else if (this.type == "employye") {

            localStorage.setItem("name", JSON.stringify(this.name));
            this.rout.navigateByUrl('home/user')
          }

        }, (result) => {
          alert(result.error.message)
        })
    }
    else {
      alert("fill form completly")

    }
  }




}
