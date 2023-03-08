import { TestBed } from '@angular/core/testing';

import { OmdbApiService } from './omdb-api.service';

describe('OmdbApiService', () => {
  let service: OmdbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmdbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
