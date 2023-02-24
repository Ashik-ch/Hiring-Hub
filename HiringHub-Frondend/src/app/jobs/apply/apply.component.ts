import { Component, OnInit } from '@angular/core';
import { JobsserviceService } from '../jobsservice.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  elements: any
  constructor(private servic: JobsserviceService) { }
  ngOnInit(): void {
    this.appliedlist()
  }

  appliedlist() {
    this.servic.appliedlist()
      .subscribe((result : any) => {
        this.elements = result.data
        console.log("list",  this.elements);

      })
  }

}
