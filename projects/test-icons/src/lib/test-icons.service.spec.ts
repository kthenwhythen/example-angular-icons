import { TestBed } from '@angular/core/testing';

import { TestIconsService } from './test-icons.service';

describe('TestIconsService', () => {
  let service: TestIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
