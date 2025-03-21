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
	private videoEnded = false;

	constructor(
		private videoService: VideoService,
		private videoTimeService: VideoTimeService,
		private videoPlaylistService: VideoPlaylistService
	) { }

	ngOnInit() {
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
		this.videoService.toggle();
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
		document.fullscreenElement
			? document.exitFullscreen()
			: document.querySelector('.video')?.requestFullscreen();
	}

	get iconPlaying() {
		return this.videoEnded
			? {
				name: 'Replay',
				value: 'replay',
			}
			: this.videoService.playing
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
