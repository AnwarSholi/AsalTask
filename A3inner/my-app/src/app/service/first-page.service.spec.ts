import { TestBed } from '@angular/core/testing';

import { FirstPageService } from './first-page.service';

describe('FirstPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstPageService = TestBed.get(FirstPageService);
    expect(service).toBeTruthy();
  });
});
