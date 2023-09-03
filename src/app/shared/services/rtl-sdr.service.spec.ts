import { TestBed } from '@angular/core/testing';

import { RtlSdrService } from './rtl-sdr.service';

describe('RtlSdrService', () => {
  let service: RtlSdrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtlSdrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
