import { Component } from '@angular/core';

import { JobsserviceService } from '../jobsservice.service';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent {
  elements: any
  term: any;


  constructor(private service: JobsserviceService ) {  }
  ngOnInit() {
    this.jobcard()
  }

  jobcard() {
    this.service.joblist()
      .subscribe((result: any) => {
        console.log("resss:",result)
        this.elements = result.data
        
      })
  }

  

  
}
