import { TestBed } from '@angular/core/testing';

import { VideoPlaylistService } from './video-playlist.service';

describe('VideoPlaylistService', () => {
	let service: VideoPlaylistService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(VideoPlaylistService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
