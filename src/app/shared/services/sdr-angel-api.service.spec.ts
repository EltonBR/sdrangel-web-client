import { TestBed } from '@angular/core/testing';

import { SdrAngelApiService } from './sdr-angel-api.service';

describe('SdrAngelApiService', () => {
  let service: SdrAngelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdrAngelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
