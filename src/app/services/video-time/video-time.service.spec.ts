import { TestBed } from '@angular/core/testing';

import { VideoTimeService } from './video-time.service';

describe('VideoTimeService', () => {
  let service: VideoTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
