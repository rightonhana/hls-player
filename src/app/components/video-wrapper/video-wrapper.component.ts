import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import Hls from 'hls.js';
import { VideoPlaylistService } from 'src/app/services/video-playlist/video-playlist.service';
import { VideoTimeService } from 'src/app/services/video-time/video-time.service';
import { VideoService } from 'src/app/services/video/video.service';
import { VolumeService } from 'src/app/services/volume/volume.service';

@Component({
	selector: 'app-video-wrapper',
	templateUrl: './video-wrapper.component.html',
	styleUrls: ['./video-wrapper.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class VideoWrapperComponent implements OnInit {
	loading = true;
	ignore = false;
	playing = false;
	playNext = true;
	private videoEnded = false;
	private hls = new Hls();
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
	};

	@ViewChild('video', { static: true }) video: ElementRef<HTMLVideoElement> = {} as ElementRef<HTMLVideoElement>;

	constructor(
		private videoService: VideoService,
		private volumeService: VolumeService,
		private videoTimeService: VideoTimeService,
		private videoPlaylistService: VideoPlaylistService
	) {}

	ngOnInit() {
		this.subscriptions();
		Object.keys(this.videoListeners).forEach((videoListener) => {
			if (this.video) {
				this.video.nativeElement.addEventListener(
					videoListener,
					this.videoListeners[videoListener as keyof typeof this.videoListeners]
				)
			}
		});
	}

	/** Play/Pause video on click */
	onVideoClick() {
		if (this.playing) {
			this.videoService.pause();
		} else {
			this.videoService.play();
		}
	}

	/** Go full screen on double click */
	onDoubleClick() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			const videoPlayerDiv = document.querySelector('.video-player');
			if (videoPlayerDiv?.requestFullscreen) {
				videoPlayerDiv.requestFullscreen();
			}
		}
	}

	/**
	 * Loads the video, if the browser supports HLS then the video use it, else play a video with native support
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

	/**
	 * Play or Pause current video
	 */
	private playPauseVideo(playing: boolean) {
		this.playing = playing;
		this.video.nativeElement[playing ? 'play' : 'pause']();
	}

	/**
	 * Setup subscriptions
	 */
	private subscriptions() {
		this.videoService.playingState$.subscribe((playing) =>
			this.playPauseVideo(playing)
		);
		this.videoPlaylistService.currentVideo$.subscribe((video) =>
			this.load(video)
		);
		this.videoTimeService.currentTime$.subscribe(
			(currentTime) => (this.video.nativeElement.currentTime = currentTime)
		);
		this.volumeService.volumeValue$.subscribe(
			(volume) => (this.video.nativeElement.volume = volume)
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
	 * Method that loads the video with HLS support
	 */
	private loadVideoWithHLS(currentVideo: string) {
		this.hls.loadSource(currentVideo);
		this.hls.attachMedia(this.video.nativeElement);
		// this.hls.on(HLS.Events.MANIFEST_PARSED, () => this.video.nativeElement.play());
	}

	/**
	 * Method that loads the video without HLS support
	 */
	private loadVideo(currentVideo: string) {
		this.video.nativeElement.src = currentVideo;
	}
}
