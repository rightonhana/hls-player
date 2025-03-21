import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWrapperComponent } from './video-wrapper.component';

describe('VideoWrapperComponent', () => {
	let component: VideoWrapperComponent;
	let fixture: ComponentFixture<VideoWrapperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VideoWrapperComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(VideoWrapperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
