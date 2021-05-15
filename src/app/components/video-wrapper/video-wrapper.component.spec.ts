import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoWrapperComponent } from './video-wrapper.component';

describe('VideoWrapperComponent', () => {
  let component: VideoWrapperComponent;
  let fixture: ComponentFixture<VideoWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
