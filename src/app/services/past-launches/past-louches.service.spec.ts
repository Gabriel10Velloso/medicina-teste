import { TestBed } from '@angular/core/testing';

import { PastLouchesService } from './past-louches.service';

describe('PastLouchesService', () => {
  let service: PastLouchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastLouchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
