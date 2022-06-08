import { TestBed } from '@angular/core/testing';

import { MylibsService } from './mylibs.service';

describe('MylibsService', () => {
  let service: MylibsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MylibsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
