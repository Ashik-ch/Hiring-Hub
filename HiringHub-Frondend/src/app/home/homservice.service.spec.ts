import { TestBed } from '@angular/core/testing';

import { HomserviceService } from './homservice.service';

describe('HomserviceService', () => {
  let service: HomserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
