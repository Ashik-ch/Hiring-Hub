import { TestBed } from '@angular/core/testing';

import { JobsserviceService } from './jobsservice.service';

describe('JobsserviceService', () => {
  let service: JobsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
