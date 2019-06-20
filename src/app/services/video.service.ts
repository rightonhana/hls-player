import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private playingState = new Subject<boolean>();
  private loading = new BehaviorSubject<boolean>(true);
  private videoEnded = new BehaviorSubject<boolean>(false);

  public get loading$(): Observable<boolean> {
    return this.loading.asObservable();
  }

  public setLoading(value: boolean): void {
    this.loading.next(value);
  }

  public play(): void {
    this.playingState.next(true);
  }

  public pause(): void {
    this.playingState.next(false);
  }

  public get playingState$(): Observable<boolean> {
    return this.playingState.asObservable();
  }

  public get videoEnded$(): Observable<boolean> {
    return this.videoEnded.asObservable();
  }

  public setVideoEnded(value: boolean): void {
    this.videoEnded.next(value);
  }
}
