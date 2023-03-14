import { Type } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  reg: any = "user"

  // validation reactive form  
  registerform = this.fb.group({       //=> form group
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],    //=>formarray
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    mobile: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    gender: [''],
    companyname: [''],
    type: ['', [Validators.required]],
    age: [''],
    position: [''],
    companytype: [''],
  });


  constructor(private service: AuthserviceService, private rout: Router, private fb: FormBuilder) { }

  ngOnInit() { }


  register() {
    // console.log("validation: ", this.registerform);

    var name = this.registerform.value.name
    var email = this.registerform.value.email
    var mobile = this.registerform.value.mobile
    var age = this.registerform.value.age
    var password = this.registerform.value.password
    var gender = this.registerform.value.gender
    var position = this.registerform.value.position
    var companyname = this.registerform.value.companyname
    var companytype = this.registerform.value.companytype
    var type = this.registerform.value.type

    if (this.registerform.valid) {
      this.service.register(name, age, mobile, email, password, gender, type, position, companyname, companytype)
        .subscribe((result: any) => {
          alert(result.message)
          this.rout.navigateByUrl('')
        }, (result) => {
          alert(result.error.message)
          this.rout.navigateByUrl('')
        })
    }
    else {
      alert("fill completly")
    }
  }


  empreg() {
    this.reg = "emp"
  }

  companyreg() {
    this.reg = "company"
  }
}


