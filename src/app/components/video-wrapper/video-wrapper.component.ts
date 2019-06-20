import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import * as HLS from 'hls.js';
import { VideoService } from 'src/app/services/video.service';
import { VolumeService } from 'src/app/services/volume.service';
import { VideoTimeService } from 'src/app/services/video-time.service';
import { VideoPlaylistService } from 'src/app/services/video-playlist.service';

@Component({
  selector: 'app-video-wrapper',
  templateUrl: './video-wrapper.component.html',
  styleUrls: ['./video-wrapper.component.scss']
})
export class VideoWrapperComponent implements OnInit {
  public loading: boolean;
  public ignore: boolean;
  private hls = new HLS();
  private videoListeners = {
    loadedmetadata: () => this.videoTimeService.setVideoDuration(this.video.nativeElement.duration),
    canplay: () => this.videoService.setLoading(false),
    seeking: () => this.videoService.setLoading(true),
    timeupdate: () => {
      if (!this.ignore) {
        this.videoTimeService.setVideoProgress(this.video.nativeElement.currentTime);
      }
      if (
        this.video.nativeElement.currentTime === this.video.nativeElement.duration &&
        this.video.nativeElement.duration > 0
      ) {
        this.videoService.pause();
        this.videoService.setVideoEnded(true);
      } else {
        this.videoService.setVideoEnded(false);
      }
    }
  };

  @ViewChild('video', { static: true }) private readonly video: ElementRef<HTMLVideoElement>;

  constructor(
    private videoService: VideoService,
    private volumeService: VolumeService,
    private videoTimeService: VideoTimeService,
    private videoPlaylistService: VideoPlaylistService
  ) {}

  public ngOnInit() {
    this.subscriptions();
    Object.keys(this.videoListeners).forEach(videoListener =>
      this.video.nativeElement.addEventListener(videoListener, this.videoListeners[videoListener])
    );
  }

  /**
   * Loads the video, if the browser supports HLS then the video use it, else play a video with native support
   */
  public load(currentVideo: string): void {
    if (HLS.isSupported()) {
      this.loadVideoWithHLS(currentVideo);
    } else {
      if (this.video.nativeElement.canPlayType('application/vnd.apple.mpegurl')) {
        this.loadVideo(currentVideo);
      }
    }
  }

  /**
   * Setup subscriptions
   */
  private subscriptions() {
    this.videoService.playingState$.subscribe(playing => this.video.nativeElement[playing ? 'play' : 'pause']());
    this.videoPlaylistService.currentVideo$.subscribe(video => this.load(video));
    this.videoTimeService.currentTime$.subscribe(currentTime => (this.video.nativeElement.currentTime = currentTime));
    this.volumeService.volumeValue$.subscribe(volume => (this.video.nativeElement.volume = volume));
    this.videoService.loading$.subscribe(loading => (this.loading = loading));
    this.videoTimeService.ignore$.subscribe(ignore => (this.ignore = ignore));
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
