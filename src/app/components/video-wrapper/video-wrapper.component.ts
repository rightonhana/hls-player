import { Component, ElementRef, ViewChild } from '@angular/core';
import { VideoService } from '../../services/video/video.service';
import { VolumeService } from '../../services/volume/volume.service';
import { VideoTimeService } from '../../services/video-time/video-time.service';
import { VideoPlaylistService } from '../../services/video-playlist/video-playlist.service';
import Hls from 'hls.js';
import { ControlComponent } from '../control/control.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { distinctUntilChanged } from 'rxjs';

@Component({
	selector: 'app-video-wrapper',
	imports: [ControlComponent, SpinnerComponent, CommonModule],
	templateUrl: './video-wrapper.component.html',
})
export class VideoWrapperComponent {
	ignore = false;
	loading = true;
	playing = false;
	playNext = true;
	private hls = new Hls();
	private videoEnded = false;
	private videoListeners = {
		loadedmetadata: () =>
			this.videoTimeService.setVideoDuration(this.video.nativeElement.duration),
		canplay: () => this.videoService.setLoading(false),
		seeking: () => this.videoService.setLoading(true),
		timeupdate: () => {
			if (!this.ignore) {
				this.videoTimeService.setVideoProgress(
					this.video.nativeElement.currentTime
				);
			}
			if (
				this.video.nativeElement.currentTime ===
				this.video.nativeElement.duration &&
				this.video.nativeElement.duration > 0
			) {
				this.videoService.pause();
				this.videoService.setVideoEnded(true);
			} else {
				this.videoService.setVideoEnded(false);
			}
		},
	} as const satisfies Partial<Record<keyof HTMLVideoElementEventMap, () => void>>;

	@ViewChild('video', { static: true }) video: ElementRef<HTMLVideoElement> = {} as ElementRef<HTMLVideoElement>;

	constructor(
		private videoService: VideoService,
		private volumeService: VolumeService,
		private videoTimeService: VideoTimeService,
		private videoPlaylistService: VideoPlaylistService
	) { }

	ngOnInit() {
		this.subscriptions();
		(Object.keys(this.videoListeners) as ReadonlyArray<keyof typeof this.videoListeners>).forEach((videoListener) => {
			if (this.video) {
				this.video.nativeElement.addEventListener(
					videoListener,
					this.videoListeners[videoListener]
				)
			}
		});
	}

	private timeout: ReturnType<typeof setTimeout> | undefined

	/** Play/Pause video on click */
	onVideoClick() {
		clearTimeout(this.timeout);
		this.timeout = setTimeout(() => this.videoService.toggle(), 200);
	}

	/** Go full screen on double click */
	onDoubleClick() {
		clearTimeout(this.timeout);
		document.fullscreenElement
			? document.exitFullscreen()
			: document.querySelector('.video')?.requestFullscreen()
	}

	/**
	 * Loads the video, if the browser supports HLS then the video use it,
	 * else play a video with native support.
	 * @param currentVideo video URL
	 */
	load(currentVideo: string): void {
		if (Hls.isSupported()) {
			this.loadVideoWithHLS(currentVideo);
		} else {
			if (
				this.video.nativeElement.canPlayType('application/vnd.apple.mpegurl')
			) {
				this.loadVideo(currentVideo);
			}
		}
	}

	get videoIconPlaying() {
		return this.videoEnded && !this.playNext
			? {
				name: 'Replay',
				value: 'replay',
			}
			: this.videoService.playing
				? {
					name: '',
					value: '',
				}
				: {
					name: 'Play',
					value: 'play_arrow',
				};
	}

	/**
	 * Setup subscriptions.
	 */
	private subscriptions() {
		this.videoService.setVideoElement(this.video.nativeElement)
		this.videoPlaylistService.currentVideoURL$.subscribe((video) =>
			this.load(video)
		);
		this.videoTimeService.currentTime$.subscribe(
			(currentTime) => (this.video.nativeElement.currentTime = currentTime)
		);
		this.volumeService.volumeValue$.subscribe(
			(volume) => (this.video.nativeElement.volume = volume / 100)
		);
		this.videoService.videoEnded$.subscribe(
			(ended) => (this.videoEnded = ended)
		);
		this.videoService.loading$.subscribe((loading) => (this.loading = loading));
		this.videoTimeService.ignore$.subscribe((ignore) => (this.ignore = ignore));
		this.videoPlaylistService.shouldPlayNext$.subscribe(
			(playNext) => (this.playNext = playNext)
		);
	}

	/**
	 * Load the video with HLS support.
	 * @param currentVideo video URL
	 */
	private loadVideoWithHLS(currentVideo: string) {
		this.hls.loadSource(currentVideo);
		this.hls.attachMedia(this.video.nativeElement);
		// this.hls.on(HLS.Events.MANIFEST_PARSED, () => this.video.nativeElement.play());
	}

	/**
	 * Load video without HLS support.
	 * @param currentVideo video URL
	 */
	private loadVideo(currentVideo: string) {
		this.video.nativeElement.src = currentVideo;
	}
}
