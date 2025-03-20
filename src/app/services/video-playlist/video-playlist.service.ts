import { Injectable } from '@angular/core';
import { PlaylistItem } from '../../../types/PlaylistItem';
import { BehaviorSubject, Observable } from 'rxjs';
import { VideoService } from '../video/video.service';

@Injectable({
	providedIn: 'root',
})
export class VideoPlaylistService {
	private list = new BehaviorSubject<ReadonlyArray<PlaylistItem>>([]);
	private currentVideoURL = new BehaviorSubject<string>('');
	private shouldPlayNext = new BehaviorSubject<boolean>(false);

	constructor(private videoService: VideoService) { }

	setShouldPlayNext(playNext: boolean): void {
		this.shouldPlayNext.next(playNext);
	}

	get shouldPlayNext$(): Observable<boolean> {
		return this.shouldPlayNext.asObservable();
	}

	get list$(): Observable<ReadonlyArray<PlaylistItem>> {
		return this.list.asObservable();
	}

	get currentVideoURL$(): Observable<string> {
		return this.currentVideoURL.asObservable();
	}

	setCurrentVideo(video: string): void {
		if (this.currentVideoURL.getValue() !== video) {
			this.currentVideoURL.next(video);
			this.videoService.pause();
		}
	}

	playNextVideo(): void {
		const activeIndex = this.list
			.getValue()
			.findIndex((video) => this.currentVideoURL.getValue() === video.url);
		this.setCurrentVideoByIndex(activeIndex + 1);
	}

	setCurrentVideoByIndex(index: number): void {
		this.setCurrentVideo(this.list.getValue()[index < this.list.getValue().length ? index : 0].url);
	}

	fetchList(endpoint: string): void {
		fetch(endpoint)
			.then((response) => response.json())
			.then((playlist: ReadonlyArray<PlaylistItem>) => {
				this.list.next(playlist);
				this.setCurrentVideo(playlist[0].url);
			});
	}
}
