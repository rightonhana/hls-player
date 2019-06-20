import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { MatSliderChange } from '@angular/material';
import { VideoTimeService } from 'src/app/services/video-time.service';
import { VideoPlaylistService } from 'src/app/services/video-playlist.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  public playing = false;
  public currentProgress = 0;
  public duration = 0;
  public currentTime = 0;
  private videoEnded = false;

  constructor(
    private videoService: VideoService,
    private videoTimeService: VideoTimeService,
    private videoPlaylistService: VideoPlaylistService
  ) {}

  public ngOnInit() {
    this.videoService
      .playingState$
      .subscribe(playing => (this.playing = playing));
    this.videoTimeService.videoDuration$.subscribe(
      duration => (this.duration = duration)
    );
    this.videoTimeService.videoProgress$.subscribe(
      progress => (this.currentProgress = progress)
    );
    this.videoService
      .videoEnded$
      .subscribe(ended => (this.videoEnded = ended));
  }

  public onPlayClick() {
    if (this.playing) {
      this.videoService.pause();
    } else {
      this.videoService.play();
    }
  }

  public onNextClick() {
    this.videoPlaylistService.playNextVideo();
    this.videoService.play();
  }

  public onInput(event: MatSliderChange): void {
    this.videoTimeService.setIgnore(true);
    this.videoTimeService.setVideoProgress(event.value);
  }

  public onChange(event: MatSliderChange) {
    this.videoTimeService.setIgnore(false);
    this.videoTimeService.setCurrentTime(event.value);
  }

  public onFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const videoPlayerDiv = document.querySelector('.video-player');
      if (videoPlayerDiv.requestFullscreen) {
        videoPlayerDiv.requestFullscreen();
      }
    }
  }

  public get iconPlaying() {
    return this.videoEnded
      ? {
          name: 'Replay',
          value: 'replay'
        }
      : this.playing
      ? {
          name: 'Pause',
          value: 'pause'
        }
      : {
          name: 'Play',
          value: 'play_arrow'
        };
  }
}
