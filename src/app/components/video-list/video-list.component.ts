import { Component, OnInit } from '@angular/core';
import { VideoPlaylistService } from 'src/app/services/video-playlist/video-playlist.service';
import { VideoService } from 'src/app/services/video/video.service';
import { PlaylistItem } from 'src/types/PlaylistItem';

@Component({
	selector: 'app-video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
	playNext = true;
	videoEnded = false;
	videoList: { name: string; selected: boolean }[] = [];
	private list: PlaylistItem[] = [];
	private activeVideo = 0;

	constructor(
		private videoService: VideoService,
		private videoPlaylistService: VideoPlaylistService
	) {}

	ngOnInit() {
		this.videoPlaylistService.list$.subscribe((list) => (this.list = list));
		this.videoPlaylistService.currentVideo$.subscribe((currentVideo) => {
			this.videoList = this.list.map((item) => ({
				name: item.title,
				selected: item.url === currentVideo,
			}));
		});
		this.videoPlaylistService.fetchList('./assets/playlist.json');
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

	playIt(index: number): void {
		this.videoPlaylistService.setCurrentVideoByIndex(index);
		this.videoService.play();
		this.activeVideo = index;
	}

	onChange(): void {
		this.playNext = !this.playNext;
		this.videoPlaylistService.setShouldPlayNext(this.playNext);
	}
}
