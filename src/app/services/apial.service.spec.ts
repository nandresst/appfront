import { TestBed } from '@angular/core/testing';

import { ApialService } from './apial.service';

describe('ApialService', () => {
  let service: ApialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
