import { TestBed } from '@angular/core/testing';

import { BikingService } from './biking.service';

describe('BikingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikingService = TestBed.get(BikingService);
    expect(service).toBeTruthy();
  });
});
