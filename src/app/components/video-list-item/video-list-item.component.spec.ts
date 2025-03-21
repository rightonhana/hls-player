import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListItemComponent } from './video-list-item.component';

describe('VideoListItemComponent', () => {
	let component: VideoListItemComponent;
	let fixture: ComponentFixture<VideoListItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VideoListItemComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(VideoListItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
