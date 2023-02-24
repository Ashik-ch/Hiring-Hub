import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobsserviceService } from '../jobsservice.service';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent {
  elements: any
  term: any;


  constructor(private service: JobsserviceService, private rout:Router ) {  }
  ngOnInit() {
    this.jobcard()
  }

  jobcard() {
    this.service.joblist()
      .subscribe((result: any) => {
        this.elements = result.data
        
      })
  }

  view(){
    this.rout.navigateByUrl( "jobview/:id")
    alert("ok")
  }

  
}
