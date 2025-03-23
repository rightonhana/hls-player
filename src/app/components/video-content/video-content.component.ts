import { Component } from '@angular/core';
import { ControlsComponent } from '../controls/controls.component';
import { VideoWrapperComponent } from '../video-wrapper/video-wrapper.component';
import { VideoPlaylistService } from '../../services/video-playlist/video-playlist.service';
import { PlaylistItem } from '../../../types/PlaylistItem';

@Component({
	selector: 'app-video-content',
	imports: [ControlsComponent, VideoWrapperComponent],
	templateUrl: './video-content.component.html'
})
export class VideoContentComponent {
	list: ReadonlyArray<PlaylistItem> = [];
	currentVideoData: PlaylistItem = { description: "", thumbnail: "", title: "", url: "" };

	constructor(
		private videoPlaylistService: VideoPlaylistService
	) { }

	ngOnInit() {
		this.videoPlaylistService.list$.subscribe((list) => (this.list = list));
		this.videoPlaylistService.currentVideoURL$.subscribe((currentVideo) => {
			this.currentVideoData = this.list.filter(video => video.url === currentVideo)[0] ?? {};
		});
	}
}
