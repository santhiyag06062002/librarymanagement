import { TestBed } from '@angular/core/testing';

import { NanbarService } from './nanbar.service';

describe('NanbarService', () => {
  let service: NanbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NanbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
