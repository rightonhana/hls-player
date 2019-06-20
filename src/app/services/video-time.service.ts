import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoTimeService {
  private videoProgress = new BehaviorSubject<number>(0);
  private videoDuration = new BehaviorSubject<number>(0);
  private currentTime = new BehaviorSubject<number>(0);
  private ignore = new BehaviorSubject<boolean>(false);

  public setVideoDuration(value: number): void {
    this.videoDuration.next(value);
  }

  public get videoDuration$(): Observable<number> {
    return this.videoDuration.asObservable();
  }

  public setVideoProgress(value: number): void {
    this.videoProgress.next(value);
  }

  public get videoProgress$(): Observable<number> {
    return this.videoProgress.asObservable();
  }

  public setCurrentTime(value: number): void {
    this.currentTime.next(value);
  }

  public get currentTime$(): Observable<number> {
    return this.currentTime.asObservable();
  }

  public setIgnore(value: boolean): void {
    this.ignore.next(value);
  }

  public get ignore$(): Observable<boolean> {
    return this.ignore.asObservable();
  }
}
