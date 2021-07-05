import { TestBed } from '@angular/core/testing';

import { FutureLaunchesService } from './future-launches.service';

describe('FutureLaunchesService', () => {
  let service: FutureLaunchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutureLaunchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
