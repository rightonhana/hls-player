import { Component } from '@angular/core';
import { VideoService } from '../../services/video/video.service';
import { VideoPlaylistService } from '../../services/video-playlist/video-playlist.service';
import { PlaylistItem } from '../../../types/PlaylistItem';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { VideoListItemComponent } from "../video-list-item/video-list-item.component";
import { PlayNextSwitchComponent } from "../play-next-switch/play-next-switch.component";

@Component({
	selector: 'app-video-list',
	imports: [
		CommonModule,
		MatListModule,
		MatSlideToggleModule,
		PlayNextSwitchComponent,
		VideoListItemComponent,
	],
	templateUrl: './video-list.component.html',
})
export class VideoListComponent {
	activeVideo = 0;
	videoEnded = false;
	videoList: { title: string; description: string; thumbnail: string; selected: boolean }[] = [];
	private _playNext = false;
	private list: ReadonlyArray<PlaylistItem> = [];

	constructor(
		private videoService: VideoService,
		private videoPlaylistService: VideoPlaylistService
	) { }

	ngOnInit() {
		this.videoPlaylistService.list$.subscribe((list) => (this.list = list));
		this.videoPlaylistService.currentVideoURL$.subscribe((currentVideo) => {
			this.videoList = this.list.map(({ title, description, thumbnail, url }) => ({
				title,
				description,
				thumbnail,
				selected: url === currentVideo,
			}));
		});
		this.videoPlaylistService.fetchList('/playlist.json');
		this.videoPlaylistService.shouldPlayNext$.subscribe(
			(playNext) => (this.playNext = playNext)
		);
		this.videoService.videoEnded$.subscribe((ended) => {
			if (this.playNext && ended) {
				this.videoPlaylistService.playNextVideo();
				this.videoService.play();
			}
		});
	}

	playItem(index: number): void {
		this.videoPlaylistService.setCurrentVideoByIndex(index);
		this.videoService.play();
		this.activeVideo = index;
	}

	playNextHandler(event: Event) {
		this.playNext = (event?.target as HTMLInputElement)?.checked
		this.videoPlaylistService.setShouldPlayNext((event?.target as HTMLInputElement)?.checked);
	}

	get playNext() {
		return this._playNext;
	}

	set playNext(value: boolean) {
		this._playNext = value;
	}
}
