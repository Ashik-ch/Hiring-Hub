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
  array: any

  constructor(private service: JobsserviceService) { }
  ngOnInit() {
    this.jobcard()
    
  }



  jobcard() {
    this.service.joblist()
      .subscribe((result) => {
        this.array = result
        this.elements = this.array.data;
        this.elements = this.elements.filter((item: any) => item.status === 'Verified');
        console.log("hjfa", this.elements)
      })
  }

}
