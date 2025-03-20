import { Component } from '@angular/core';
import { VideoService } from '../../services/video/video.service';
import { VideoTimeService } from '../../services/video-time/video-time.service';
import { VideoPlaylistService } from '../../services/video-playlist/video-playlist.service';
import { ControlComponent } from '../control/control.component';
import { VolumeControlComponent } from '../volume-control/volume-control.component';
import { TimeComponent } from '../time/time.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
	selector: 'app-controls',
	imports: [ControlComponent, VolumeControlComponent, TimeComponent, ProgressBarComponent],
	templateUrl: './controls.component.html',
})
export class ControlsComponent {
	currentProgress = 0;
	currentTime = 0;
	duration = 0;
	label = 'Audio volume';
	playing = false;
	private videoEnded = false;

	constructor(
		private videoService: VideoService,
		private videoTimeService: VideoTimeService,
		private videoPlaylistService: VideoPlaylistService
	) { }

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

	onInput(event: Event): void {
		this.videoTimeService.setIgnore(true);
		this.videoTimeService.setVideoProgress((event?.target as HTMLInputElement)?.valueAsNumber ?? 0);
	}

	onChange(event: Event) {
		this.videoTimeService.setIgnore(false);
		this.videoTimeService.setCurrentTime((event?.target as HTMLInputElement)?.valueAsNumber ?? 0);
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
