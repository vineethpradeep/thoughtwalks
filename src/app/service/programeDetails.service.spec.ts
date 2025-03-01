import { TestBed } from '@angular/core/testing';

import { ProgrameDetailsService } from './programeDetails.service';

describe('ProgrameService', () => {
  let service: ProgrameDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrameDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
