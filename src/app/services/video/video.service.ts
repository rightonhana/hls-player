import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class VideoService {
	private loading = new BehaviorSubject<boolean>(true);
	private videoElement: HTMLVideoElement | undefined;
	private videoEnded = new BehaviorSubject<boolean>(false);

	get loading$(): Observable<boolean> {
		return this.loading.asObservable();
	}

	setLoading(value: boolean): void {
		this.loading.next(value);
	}

	setVideoElement(videoElement: HTMLVideoElement) {
		this.videoElement = videoElement;
	}

	get playing() {
		return !(this.videoElement?.paused ?? true)
	}

	play(): void {
		this.videoElement?.play()
	}

	pause(): void {
		this.videoElement?.pause()
	}

	get toggle() {
		return this[this.playing ? "pause" : "play"];
	}

	get videoEnded$(): Observable<boolean> {
		return this.videoEnded.asObservable();
	}

	setVideoEnded(value: boolean): void {
		this.videoEnded.next(value);
	}
}
