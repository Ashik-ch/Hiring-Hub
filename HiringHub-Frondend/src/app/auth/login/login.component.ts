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

          localStorage.setItem("email", JSON.stringify(email));
          localStorage.setItem("type", JSON.stringify(this.type));
          console.log(`email: ${email} type: ${this.type}  companyname:  ${this.companyname} `);

          if (this.type == "company") {

            localStorage.setItem("companyname", JSON.stringify(this.companyname));
            this.rout.navigateByUrl('adminhome')

          }
          else if (this.type == "employye") {

            localStorage.setItem("companyname", JSON.stringify(this.companyname));
            this.rout.navigateByUrl('home')
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
