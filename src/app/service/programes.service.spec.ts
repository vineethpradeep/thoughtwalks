import { TestBed } from '@angular/core/testing';

import { ProgramesService } from './programes.service';

describe('ProgramesService', () => {
  let service: ProgramesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
