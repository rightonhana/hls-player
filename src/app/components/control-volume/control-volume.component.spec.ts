import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlVolumeComponent } from './control-volume.component';

describe('ControlVolumeComponent', () => {
  let component: ControlVolumeComponent;
  let fixture: ComponentFixture<ControlVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
