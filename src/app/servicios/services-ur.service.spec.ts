import { TestBed, inject } from '@angular/core/testing';

import { ServicesUrService } from './services-ur.service';

describe('ServicesUrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesUrService]
    });
  });

  it('should be created', inject([ServicesUrService], (service: ServicesUrService) => {
    expect(service).toBeTruthy();
  }));
});
