import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomserviceService } from '../homservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


  email: any
  elements: any
  constructor(private http: HttpClient, private servic: HomserviceService, private AR: ActivatedRoute) { }

  ngOnInit() {

    this.AR.params
      .subscribe((result) => {
        console.log("rs1", result);
        console.log("rs1", result['email']);
        this.email = result['email']

      })

    this.servic.profile(this.email)
      .subscribe((result: any) => {
        this.elements = result.data
        console.log("ress", this.elements );

      });
  }

}
