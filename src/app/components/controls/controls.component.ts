import { Component, OnInit } from '@angular/core';
import { VideoPlaylistService } from 'src/app/services/video-playlist/video-playlist.service';
import { VideoTimeService } from 'src/app/services/video-time/video-time.service';
import { VideoService } from 'src/app/services/video/video.service';
import { MatLegacySliderChange as MatSliderChange } from '@angular/material/legacy-slider';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
	playing = false;
	currentProgress = 0;
	duration = 0;
	currentTime = 0;
	label = 'Audio volume';
	private videoEnded = false;

	constructor(
		private videoService: VideoService,
		private videoTimeService: VideoTimeService,
		private videoPlaylistService: VideoPlaylistService
	) {}

	ngOnInit() {
		this.videoService.playingState$.subscribe(
			(playing) => (this.playing = playing)
		);
		this.videoTimeService.videoDuration$.subscribe(
			(duration) => (this.duration = duration)
		);
		this.videoTimeService.videoProgress$.subscribe(
			(progress) => (this.currentProgress = progress)
		);
		this.videoService.videoEnded$.subscribe(
			(ended) => (this.videoEnded = ended)
		);
	}

	onPlayClick() {
		if (this.playing) {
			this.videoService.pause();
		} else {
			this.videoService.play();
		}
	}

	onNextClick() {
		this.videoPlaylistService.playNextVideo();
		this.videoService.play();
	}

	onInput(event: MatSliderChange): void {
		this.videoTimeService.setIgnore(true);
		this.videoTimeService.setVideoProgress(event?.value ?? 0);
	}

	onChange(event: MatSliderChange) {
		this.videoTimeService.setIgnore(false);
		this.videoTimeService.setCurrentTime(event?.value ?? 0);
	}

	onFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			const videoPlayerDiv = document.querySelector('.video-player');
			if (videoPlayerDiv?.requestFullscreen) {
				videoPlayerDiv.requestFullscreen();
			}
		}
	}

	get iconPlaying() {
		return this.videoEnded
			? {
					name: 'Replay',
					value: 'replay',
				}
			: this.playing
			? {
					name: 'Pause',
					value: 'pause',
				}
			: {
					name: 'Play',
					value: 'play_arrow',
				};
	}

	ariaLabel() {
		return this.label;
	}
}
